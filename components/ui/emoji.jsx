import { cn } from "@/lib/utils";

const sizes = {
	sm: "text-2xl",
	md: "text-4xl",
	lg: "text-6xl",
};

export default function Emoji({ symbol, size, className, ...props }) {
	return (
		<span className={cn(sizes[size ? size : "md"], className)} props>
			{symbol}
		</span>
	);
}
