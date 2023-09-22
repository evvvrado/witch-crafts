import "@/styles/css/globals.css";
import type { Metadata } from "next";

import { inter } from "@/styles/fonts";
import Link from "next/link";
import PageContainer from "@/components/page-container";

const definition = {
	title: "Witch Crafts | My handcraft components collection.",
	description: " My handcraft components collection.",
	resumeTitle: "| WC",
	icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪄</text></svg>",
};

export const metadata: Metadata = {
	title: {
		default: definition.title,
		template: `%s ${definition.resumeTitle}`,
	},

	description: definition.description,
	robots: "/robots.txt",

	openGraph: {
		type: "website",
		title: `Acessar ${definition.title}`,
		description: definition.description,
		locale: "pt_BR",
		alternateLocale: "en_US",
		countryName: "Brasil",
	},

	twitter: {
		title: `Acessar ${definition.title}`,
		description: definition.description,
		card: "summary_large_image",
		creator: "@evvvrado",
	},

	icons: [
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: definition.icon,
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: definition.icon,
		},
		{
			rel: "icon",
			url: definition.icon,
		},
	],

	authors: [
		{
			name: "Everaldo Júnior",
			url: "https://twitter.com/evvvrado",
		},
		{
			name: "Insany Design",
			url: "https://insany.design",
		},
	],

	colorScheme: "normal",
	viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
	appleWebApp: true,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${inter.variable}`} lang="pt-BR">
			<body>
				<PageContainer>{children}</PageContainer>

				<footer className="fixed bottom-0 left-0 right-0 z-10 w-full border border-solid border-t-gray-200 bg-gray-50 py-4 text-center text-sm text-gray-400">
					<Link
						target="_blank"
						className="m-auto block w-fit hover:opacity-70"
						href="https://github.com/evvvrado/witch-crafts"
					>
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.14239 -0.000976562C3.63986 -0.000976562 0 3.66569 0 8.20186C0 11.8279 2.33218 14.8972 5.56754 15.9835C5.97204 16.0652 6.12021 15.807 6.12021 15.5899C6.12021 15.3997 6.10687 14.7479 6.10687 14.0687C3.84186 14.5577 3.37019 13.0909 3.37019 13.0909C3.00619 12.1402 2.46685 11.8959 2.46685 11.8959C1.72551 11.3934 2.52085 11.3934 2.52085 11.3934C3.34319 11.4477 3.77469 12.2354 3.77469 12.2354C4.50253 13.4847 5.67537 13.1317 6.14721 12.9144C6.21454 12.3847 6.43038 12.018 6.65954 11.8144C4.85303 11.6242 2.95235 10.918 2.95235 7.76719C2.95235 6.87086 3.27569 6.13752 3.78803 5.56719C3.70719 5.36352 3.42402 4.52136 3.86903 3.39419C3.86903 3.39419 4.55653 3.17686 6.10671 4.23619C6.77039 4.05663 7.45484 3.96529 8.14239 3.96452C8.82989 3.96452 9.53073 4.05969 10.1779 4.23619C11.7282 3.17686 12.4158 3.39419 12.4158 3.39419C12.8608 4.52136 12.5774 5.36352 12.4966 5.56719C13.0224 6.13752 13.3324 6.87086 13.3324 7.76719C13.3324 10.918 11.4317 11.6105 9.61173 11.8144C9.9084 12.0724 10.1644 12.5612 10.1644 13.3354C10.1644 14.4354 10.1511 15.3182 10.1511 15.5897C10.1511 15.807 10.2994 16.0652 10.7037 15.9837C13.9391 14.897 16.2713 11.8279 16.2713 8.20186C16.2846 3.66569 12.6314 -0.000976562 8.14239 -0.000976562Z"
								fill="#1E1E1E"
							/>
							<defs>
								<clipPath id="clip0_338_46290">
									<rect
										width="16.3334"
										height="16"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>
				</footer>
			</body>
		</html>
	);
}
