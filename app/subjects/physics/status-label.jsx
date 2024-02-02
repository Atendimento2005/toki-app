import { cn } from "@/lib/utils";

const statusColors = {
	untracked: "bg-slate-100",
	willLeave: "bg-slate-500",
	weak: "bg-red-500",
	medium: "bg-orange-500",
	strong: "bg-green-500",
};

const labelTitles = {
	willLeave: "Will Leave",
	weak: "Weak",
	medium: "Medium",
	strong: "Strong",
};

export default function StatusLabel({ status, className = "", ...props }) {
	return (
		<div
			className={cn(
				"flex flex-row justify-start items-center gap-2",
				className
			)}
			props
		>
			<div
				className={cn("w-4 h-4 rounded-[.25rem]", statusColors[status])}
			></div>
			<span className="text-sm text-muted-foreground">
				{labelTitles[status]}
			</span>
		</div>
	);
}
