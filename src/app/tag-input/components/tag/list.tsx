"use client";

import React from "react";
import { useTagInput } from "./root";
import { motion, AnimatePresence } from "framer-motion";

const List: React.FC = () => {
	const { tagList, removeTag } = useTagInput();

	if (!tagList.length) return;

	return (
		<ul className="mb-4 mt-3 flex max-w-xs flex-row flex-wrap gap-2">
			<AnimatePresence>
				{tagList.map((content) => (
					<ListItem
						key={content}
						content={content}
						onClick={() => removeTag(content)}
					/>
				))}
			</AnimatePresence>
		</ul>
	);
};

const ListItem: React.FC<{ content: string; onClick: () => void }> = ({
	content,
	onClick: handleClick,
}) => {
	return (
		<motion.li
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			layout
			transition={{ opacity: { duration: 0.2 } }}
			className="group flex w-fit cursor-default flex-row items-center gap-2 rounded-full border border-solid border-gray-300 bg-gray-100 px-2 py-0.5 text-gray-400 transition-colors"
		>
			<span className="text-xs font-bold">{content}</span>
			<button
				onClick={handleClick}
				className="group-hover:text-danger cursor-pointer"
			>
				<span>&times;</span>
			</button>
		</motion.li>
	);
};

export default List;
