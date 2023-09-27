"use client";

import React, { ReactNode } from "react";

import { motion } from "framer-motion";

const PageTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
			}}
			className="bg-gray-50"
		>
			{children}
		</motion.main>
	);
};

export default PageTemplate;
