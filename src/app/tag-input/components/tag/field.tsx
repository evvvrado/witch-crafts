"use client";

import React from "react";
import { useTagInput } from "./root";
import { cn } from "@/app/styles/mixins";

const Field: React.FC<React.HtmlHTMLAttributes<HTMLInputElement>> = ({
	className,
	...props
}) => {
	const { insertTag, typingTag, setTypingTag } = useTagInput();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTypingTag(e.target.value);
	};

	const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter") return;
		insertTag();
	};

	return (
		<input
			{...props}
			type="text"
			placeholder="Insert here."
			className={cn(className, "")}
			value={typingTag}
			onChange={handleInputChange}
			onKeyDown={handlePress}
		/>
	);
};

export default Field;
