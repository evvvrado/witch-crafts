"use client";

import React, { ReactNode } from "react";

import ButtonSolid from "../button-solid";
import { useUpload } from "./root";

const Trigger: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { handleDone } = useUpload();

	return (
		<ButtonSolid onClick={handleDone} variant="primary">
			{children}
		</ButtonSolid>
	);
};

export default Trigger;
