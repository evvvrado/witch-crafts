"use client";

import React from "react";
import { useTagInput } from "./root";
import { cn } from "@/app/styles/mixins";

const Counter: React.FC<
	React.HTMLAttributes<HTMLSpanElement> & { divider?: string }
> = ({ className, divider = "/", ...props }) => {
	const { tagList, maxInputs } = useTagInput();

	return (
		<span {...props} className={cn(className, "")}>
			{`${tagList.length}${divider}${maxInputs}`}
		</span>
	);
};

export default Counter;
