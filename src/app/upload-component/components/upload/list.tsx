/* eslint-disable no-comments/disallowComments */
"use client";

import React, { useMemo } from "react";
import { useUpload } from "./root";

import { AnimatePresence, motion } from "framer-motion";

const List: React.FC = () => {
	const { files, onFilesSelected } = useUpload();

	function removeItem(removeIndex: number) {
		onFilesSelected(files.filter((file, index) => index != removeIndex));
	}

	return (
		<ul className="mb-4 flex w-full flex-col gap-4">
			<AnimatePresence>
				{files.map((file, index) => (
					<ListItem
						key={index}
						file={file}
						index={index}
						removeItem={removeItem}
					/>
				))}
			</AnimatePresence>
		</ul>
	);
};

const ListItem: React.FC<{
	file: File;
	index: number;
	removeItem: (index: number) => void;
}> = ({ file, index, removeItem }) => {
	const fileName = useMemo(() => {
		if (file.name.length > 14) {
			return file.name.slice(0, 14).concat(`.${file.name.split(".")[1]}`);
		}

		return file.name;
	}, [file]);

	const fileSize = useMemo(() => {
		const fileSizeInKB = file.size / 1024;

		if (fileSizeInKB > 1024) {
			const fileSizeInMB = fileSizeInKB / 1024;

			return fileSizeInMB.toFixed(1).concat(" MB");
		}

		return fileSizeInKB.toFixed(1).concat(" KB");
	}, [file]);

	return (
		<motion.li
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{
				opacity: 0,
			}}
			transition={{ opacity: { duration: 0.2 } }}
			className="group flex w-full cursor-default items-center gap-4 overflow-hidden rounded-md border border-slate-300 bg-white px-4 py-2 text-black"
		>
			<picture className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-200">
				{file.type === "application/pdf" ? (
					<iframe
						src={URL.createObjectURL(file)}
						title={file.name}
					></iframe>
				) : (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						className="frame"
						src={URL.createObjectURL(file)}
						alt={file.name}
					/>
				)}
			</picture>

			<span className="text-sm">
				<strong>{fileName}</strong>
				<p className="opacity-70">{fileSize}</p>
			</span>

			<button
				onClick={() => removeItem(index)}
				className="ms-auto flex h-7 w-7 items-center justify-center rounded-full text-lg text-red-300 opacity-0  transition-opacity hover:bg-slate-50 hover:text-red-500 group-hover:opacity-100"
			>
				&times;
			</button>
		</motion.li>
	);
};

export default List;
