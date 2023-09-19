import { cn } from "@/app/styles/mixins";

const ButtonBase: React.FC<ButtonBaseProps> = ({
	as = "button",
	className,
	children,
	...restProps
}) => {
	const Element = as;

	return (
		<Element {...restProps} className={cn("", className)}>
			{children}
		</Element>
	);
};

export default ButtonBase;
