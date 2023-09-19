import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<main className="bg-gray-50">
			<div className="m-auto flex h-screen w-screen items-center justify-center">
				<Link
					href="/upload-component"
					className="transition-colors hover:text-slate-600"
				>
					Upload Component
				</Link>
			</div>
		</main>
	);
};

export default Home;
