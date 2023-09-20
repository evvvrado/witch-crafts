import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<main className="bg-gray-50">
			<nav className="m-auto flex h-screen w-screen items-center justify-center">
				<ul>
					<li>
						<h1 className="mb-4 block select-none text-slate-900">
							Check some of my crafts 🪄.
						</h1>
					</li>

					<li>
						<hr className="h-.5 mb-8 w-full border-b-slate-500" />
					</li>

					<li>
						<Link
							href="/upload-component"
							className="rounded border border-slate-400 bg-slate-200 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-300"
						>
							Upload Component
							<span className="ms-4 text-slate-400">→</span>
						</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
};

export default Home;
