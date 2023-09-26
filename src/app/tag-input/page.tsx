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
						My objective was to develop a component that empowers me
						to input a list of strings, all while retaining full
						control over the additions and deletions. This component
						boasts Case Sensitivity and offers the flexibility to
						set a maximum length limit for the tags.
					</p>
				</div>

				<InputTag.Root maxInputs={5} className="mb-10 w-full max-w-xs">
					<InputTag.Error />

					<div className="relative flex w-full items-center justify-center gap-2">
						<InputTag.Field className="flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-black active:bg-slate-100" />

						<InputTag.Counter className="pointer-events-none absolute right-16 block text-xs text-neutral-600" />

						<InputTag.Trigger>
							<button className="flex  h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white text-black hover:bg-slate-50 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-30">
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
