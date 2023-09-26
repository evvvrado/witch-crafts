import React from "react";
import { useTagInput } from "./root";

const Field: React.FC = () => {
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
			type="text"
			placeholder="Insert here."
			className="flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-black active:bg-slate-100"
			value={typingTag}
			onChange={handleInputChange}
			onKeyDown={handlePress}
		/>
	);
};

export default Field;
