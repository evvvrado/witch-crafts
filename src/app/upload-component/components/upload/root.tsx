"use client";

import React, {
	createContext,
	HTMLAttributes,
	useContext,
	useId,
	useState,
} from "react";

import { cn } from "@/app/styles/mixins";

import { AnimatePresence, motion } from "framer-motion";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const MAX_FILE_QUANTITY = 3;

interface UploadContext {
	id: string;
	files: File[];
	fileError: string | undefined;
	done: boolean;
	handleDone: () => void;
	setFileError: (error: string | undefined) => void;
	onFilesSelected: (files: File[]) => void;
	validateFile: (files: File) => boolean;
}

const RootContext = createContext({} as UploadContext);

const Root: React.FC<HTMLAttributes<HTMLDivElement>> = ({ id, ...props }) => {
	const customId = useId();
	const [files, setFiles] = useState<File[]>([]);
	const [fileError, setFileError] = useState<string | undefined>();
	const [done, setDone] = useState(false);

	const handleDone = () => {
		if (!files.length) {
			setFileError("Input cannot be empty.");
			return;
		}

		setFileError("");
		setDone(true);
	};

	const validateFile = (file: File) => {
		if (file.size > MAX_FILE_SIZE) {
			setFileError("File size exceeds 2MB.");
			return false;
		}

		if (
			!(
				file.type === "application/pdf" ||
				file.type === "image/png" ||
				file.type === "image/jpeg"
			)
		) {
			setFileError("Invalid file format.");
			return false;
		}

		if (files.length >= MAX_FILE_QUANTITY) {
			setFileError("File quantity limit exceeded.");
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
				done,
				handleDone,
				onFilesSelected: setFiles,
			}}
		>
			<AnimatePresence initial={false} mode="wait">
				{done ? (
					<motion.div
						key={"done"}
						initial={{
							opacity: 0,
							y: 10,
						}}
						exit={{
							opacity: 0,
							y: -10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.2,
							ease: "easeInOut",
						}}
						className=" group mb-4 flex w-80  select-none flex-col  items-center justify-center rounded-lg border border-green-300 bg-white py-10 "
					>
						<span className="text-center font-semibold text-gray-600">
							✅ Form submitted.
						</span>
					</motion.div>
				) : (
					<motion.div
						key={"waiting"}
						initial={{
							opacity: 0,
							y: 10,
						}}
						exit={{
							opacity: 0,
							y: -10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.2,
							ease: "easeInOut",
						}}
					>
						<div {...props} className={cn("", props.className)} />
					</motion.div>
				)}
			</AnimatePresence>
		</RootContext.Provider>
	);
};

export const useUpload = () => useContext(RootContext);

export default Root;
