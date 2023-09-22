"use client";

import { AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

const PageContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default PageContainer;
