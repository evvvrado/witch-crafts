import { Metadata, NextPage } from "next";

import ButtonSolid from "./components/button-solid";
import * as Upload from "./components/upload";

export const metadata: Metadata = {
	title: "Upload Component",
};

const UploadComponent: NextPage = () => {
	return (
		<main className="bg-gray-50">
			<div className="m-auto flex h-screen w-screen items-center justify-center">
				<Upload.Root className="flex flex-col items-center justify-center">
					<Upload.Label>
						<Upload.Field />
					</Upload.Label>

					<Upload.List />

					<Upload.Error />

					<ButtonSolid variant="primary">Ready</ButtonSolid>
				</Upload.Root>
			</div>
		</main>
	);
};

export default UploadComponent;
