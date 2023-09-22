import { Metadata, NextPage } from "next";

import PageTemplate from "@/components/page-template";
import * as Upload from "./components/upload";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Upload Component",
};

const UploadComponent: NextPage = () => {
	return (
		<PageTemplate key={"upload"}>
			<div className="m-auto flex h-screen w-screen flex-col items-center justify-center">
				<div className="mb-10 max-w-xs">
					<Link
						href={"/"}
						className="-ms-4 mb-10 block w-fit rounded-lg px-4 py-2 font-semibold text-gray-800 transition-all  hover:bg-gray-100"
					>
						⬅️ Back
					</Link>

					<h1 className="mb-6 block select-none text-xl font-semibold text-gray-900 transition-colors">
						📁 Upload Component.
					</h1>

					<p className="text-sm text-gray-500">
						For the first component, I aimed to push my own
						boundaries and take on a challenge. This challenge
						involved creating an Multiple Upload Component with Drag
						& Drop capabilities, all while focusing on achieving a
						visually appealing user interface. My inspiration for
						this project came from{" "}
						<Link
							className="text-gray-800 underline underline-offset-4 hover:text-gray-600"
							target="_blank"
							href={
								"https://github.com/WillMoreiraDev/component-upload"
							}
						>
							Will Moreira&apos;s Upload Component
						</Link>
						.
					</p>
				</div>

				<Upload.Root className="flex flex-col items-center justify-center">
					<Upload.Label>
						<Upload.Field />
					</Upload.Label>

					<Upload.List />

					<Upload.Error />

					<Upload.Trigger>Ready</Upload.Trigger>
				</Upload.Root>
			</div>
		</PageTemplate>
	);
};

export default UploadComponent;
