import { cn } from "@/app/styles/mixins";
import ButtonBase from "./button-base";

const solidVariants = {
	primary:
		"bg-white hover:bg-slate-50 border-slate-300 border text-black active:bg-slate-100",
	outline: "border border-black bg-transparent shadow-sm",
};

interface ButtonSolidProps {
	variant?: keyof typeof solidVariants;
	children: React.ReactNode;
}

const ButtonSolid: React.FC<ButtonSolidProps & ButtonBaseProps> = ({
	variant = "primary",
	children,
	...restProps
}) => {
	return (
		<ButtonBase
			{...restProps}
			className={cn(
				"focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md px-3 text-sm transition-colors focus:ring-2 focus-visible:outline-none focus-visible:ring-2",
				solidVariants[variant],
			)}
		>
			{children}
		</ButtonBase>
	);
};

export default ButtonSolid;
