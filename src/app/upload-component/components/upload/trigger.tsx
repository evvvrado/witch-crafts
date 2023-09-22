"use client";

import React, { ReactNode } from "react";
import { useUpload } from "./root";
import ButtonSolid from "../button-solid";

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
