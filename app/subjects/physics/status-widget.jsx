import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import Emoji from '@/components/ui/emoji'
import { Clock } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const widgetVariants = cva("flex flex-row h-36 w-full md:w-[49%] m-auto bg-opacity-40", {
	variants: {
		variant: {
			willLeave: "bg-slate-500",
			weak: "bg-red-500",
			medium: "bg-orange-500",
			strong: "bg-green-500"
		},
	},
	defaultVariants:{
		variant: "willLeave"
	}
});

const widgetTitles = {
	willLeave: "Will Leave",
	weak: "Weak",
	medium: "Medium",
	strong: "Strong"
}

const widgetIcons = {
	willLeave: "🕑",
	weak: "😩",
	medium: "😘",
	strong: "💪"
}

export default function StatusWidget({ variant, count, className }) {

	const widgetTitle = widgetTitles[variant] 

	return (
		<Card className={cn(widgetVariants({variant, className}))}>
			<CardHeader>
				<CardTitle className="text-2xl font-bold">{widgetTitle}</CardTitle>
				<CardDescription>{count} Chapters</CardDescription>
			</CardHeader>
			<CardContent className="ml-auto my-auto">
				<Emoji symbol={widgetIcons[variant]}></Emoji>
			</CardContent>
		</Card>
	);
}
