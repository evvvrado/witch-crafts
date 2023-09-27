"use client";

import React from "react";

import { cn } from "@/app/styles/mixins";

import { useTagInput } from "./root";

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
