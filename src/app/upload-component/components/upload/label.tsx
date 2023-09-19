"use client";

import React, { DragEvent, HTMLAttributes } from "react";
import { useUpload } from "./root";

const Label: React.FC<HTMLAttributes<HTMLLabelElement>> = ({ children }) => {
	const { files, onFilesSelected, validateFile } = useUpload();

	const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();

		if (event.dataTransfer.items) {
			const items: DataTransferItemList = event.dataTransfer.items;

			for (let i = 0; i < items.length; i++) {
				if (items[i].kind === "file") {
					const file = items[i].getAsFile();

					if (file && validateFile(file)) {
						onFilesSelected([...files, file]);
					}
				}
			}
		} else {
			const inputedFiles: FileList = event.dataTransfer.files;

			for (let i = 0; i < inputedFiles.length; i++) {
				if (!validateFile(inputedFiles[i])) return;
				onFilesSelected([...files, inputedFiles[i]]);
			}
		}
	};
	const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
	};

	return (
		<label
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			className=" group mb-4 flex h-40  w-80 cursor-pointer flex-col items-center justify-center rounded-lg border border-slate-300 bg-white text-black hover:bg-slate-50 active:bg-slate-100"
		>
			<span className="text-center text-slate-950 transition-all group-hover:scale-95">
				<strong>Drag & Drop Any File Here</strong>
				<p>
					or <span className="text-purple-500">browse files</span>{" "}
					from your device.
				</p>
			</span>

			{children}
		</label>
	);
};

export default Label;
