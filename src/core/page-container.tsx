"use client";

import React, { ReactNode } from "react";

import { AnimatePresence } from "framer-motion";

const PageContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default PageContainer;
