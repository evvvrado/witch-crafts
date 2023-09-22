import { NextPage } from "next";
import Link from "next/link";
import PageTemplate from "@/components/page-template";
import Logo from "@/components/evvvrado-logo";

const Home: NextPage = () => {
	return (
		<PageTemplate key={"home"}>
			<nav className="m-auto flex h-screen w-screen items-center justify-center">
				<ul>
					<li className="max-w-xs">
						<Logo className="mb-8" />

						<h1 className="mb-8 block select-none text-4xl font-semibold transition-colors">
							<span className=" bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
								Check some of my crafts
							</span>{" "}
							🪄.
						</h1>

						<p className="mb-10 text-sm text-gray-500">
							WitchCrafts is a bewitching repository dedicated to
							the enchanting world of handcrafted components with
							a spooky twist. Dive into the realm of Halloween
							magic with a curated collection of meticulously
							crafted, ghastly-themed creations that are sure to
							add a touch of mystique to your projects. You can
							check more of my work here{" "}
							<Link
								className="text-gray-800 underline underline-offset-4 hover:text-gray-600"
								target="_blank"
								href={
									"https://github.com/evvvrado/witch-crafts"
								}
							>
								@evvvrado
							</Link>
							.
						</p>
					</li>

					<li>
						<Link
							href="/upload-component"
							title="Go to Upload Component Page."
							className=" -ms-4 rounded-lg px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-gray-100 "
						>
							<span className="me-2">📁</span> Upload Component
						</Link>
					</li>
				</ul>
			</nav>
		</PageTemplate>
	);
};

export default Home;
