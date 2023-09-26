import PageTemplate from "@/components/page-template";
import { Metadata, NextPage } from "next";
import Link from "next/link";
import * as InputTag from "./components/tag";

export const metadata: Metadata = {
	title: "Tag Input",
};

const TagInput: NextPage = () => {
	return (
		<PageTemplate key={"tag"}>
			<div className="m-auto flex h-screen w-screen flex-col items-center justify-center">
				<div className="mb-10 max-w-xs">
					<Link
						href={"/"}
						className="-ms-4 mb-10 block w-fit rounded-lg px-4 py-2 font-semibold text-gray-800 transition-all  hover:bg-gray-100"
					>
						⬅️ Back
					</Link>

					<h1 className="mb-6 block select-none text-xl font-semibold text-gray-900 transition-colors">
						🏷️ Tag Input.
					</h1>

					<p className="text-sm text-gray-500">
						My goal was to create a component that allows me to
						input a list of strings while maintaining complete
						control over what is added and removed.
					</p>
				</div>

				<InputTag.Root maxInputs={5} className="mb-10 w-full max-w-xs">
					<InputTag.Error />

					<div className="flex w-full items-center justify-center gap-2">
						<InputTag.Field />

						<InputTag.Trigger>
							<button className="flex  h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white text-black hover:bg-slate-50 active:bg-slate-100">
								+
							</button>
						</InputTag.Trigger>
					</div>

					<InputTag.List />
				</InputTag.Root>
			</div>
		</PageTemplate>
	);
};

export default TagInput;
