"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useUpload } from "./root";

const Error: React.FC = () => {
	const { fileError } = useUpload();

	return (
		<AnimatePresence mode="wait" initial={false}>
			{fileError && (
				<motion.span
					layout
					initial={{
						opacity: 0,
						height: 0,
					}}
					animate={{
						opacity: 1,
						height: "max-content",
					}}
					exit={{
						opacity: 0,
						height: 0,
					}}
					transition={{
						ease: "linear",
						duration: 0.1,
					}}
					className="mb-3 mt-3 block  text-red-400"
				>
					{fileError}
				</motion.span>
			)}
		</AnimatePresence>
	);
};

export default Error;
