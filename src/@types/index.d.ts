declare;

type SeoType = {
	title: string;
	description?: string;
};

interface ButtonBaseProps {
	as?: ElementType;
	className?: string;
	children: React.ReactNode;
}
