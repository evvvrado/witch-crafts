import "@/styles/css/globals.css";
import type { Metadata } from "next";

import { inter } from "@/styles/fonts";

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
			<body>{children}</body>
		</html>
	);
}
