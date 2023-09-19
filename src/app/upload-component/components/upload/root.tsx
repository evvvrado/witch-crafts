"use client";
const MAX_FILE_SIZE = 2 * 1024 * 1024;

import { cn } from "@/app/styles/mixins";
import React, {
	HTMLAttributes,
	createContext,
	useContext,
	useId,
	useState,
} from "react";

interface UploadContext {
	id: string;
	files: File[];
	fileError: string | undefined;
	setFileError: (error: string | undefined) => void;
	onFilesSelected: (files: File[]) => void;
	validateFile: (files: File) => boolean;
}

const RootContext = createContext({} as UploadContext);

const Root: React.FC<HTMLAttributes<HTMLDivElement>> = ({ id, ...props }) => {
	const customId = useId();
	const [files, setFiles] = useState<File[]>([]);
	const [fileError, setFileError] = useState<string | undefined>();

	const validateFile = (file: File) => {
		if (file.size > MAX_FILE_SIZE) {
			setFileError("File size exceeds 5MB.");
			return false;
		}

		if (
			!(
				file.type === "application/pdf" ||
				file.type === "image/png" ||
				file.type === "image/jpeg"
			)
		) {
			setFileError("Invalid file format");
			return false;
		}

		return true;
	};

	return (
		<RootContext.Provider
			value={{
				id: id ?? customId,
				files,
				fileError,
				setFileError,
				validateFile,
				onFilesSelected: setFiles,
			}}
		>
			<div {...props} className={cn("", props.className)} />
		</RootContext.Provider>
	);
};

export const useUpload = () => useContext(RootContext);

export default Root;
