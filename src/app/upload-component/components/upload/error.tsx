"use client";

import React from "react";
import { useUpload } from "./root";

const Error: React.FC = () => {
	const { fileError } = useUpload();

	if (fileError)
		return <span className="mb-3 mt-3 text-red-400">{fileError}</span>;
};

export default Error;
