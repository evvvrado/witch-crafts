"use client";

import React, { ChangeEvent } from "react";

import { useUpload } from "./root";

const Field: React.FC = () => {
	const { onFilesSelected, files, setFileError, validateFile } = useUpload();

	function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files?.length) {
			return;
		}

		const inputedFiles = Array.from(event.target.files);

		for (const file of inputedFiles) {
			if (!validateFile(file)) {
				return;
			}
		}

		onFilesSelected([...inputedFiles, ...files]);
		setFileError(undefined);
	}

	return (
		<input
			onChange={handleFilesSelected}
			type="file"
			multiple
			maxLength={3}
			className="mb-8 hidden"
			accept="image/jpeg,image/gif,image/png,application/pdf"
		/>
	);
};

export default Field;
