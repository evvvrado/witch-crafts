import React from "react";
import { useTagInput } from "./root";

const Error: React.FC = () => {
	const { errorMessage } = useTagInput();

	if (!errorMessage) return;

	return (
		<span className="mb-3 mr-auto block text-red-400">{errorMessage}</span>
	);
};

export default Error;
