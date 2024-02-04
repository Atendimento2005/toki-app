import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

export default function ChapterCardWidget({
	chapterName,
	lastYearQ,
	last5YearQ,
	className,
}) {
	return (
		<Card className={cn("flex flex-row w-full h-36", className)}>
			<CardHeader>
				<CardTitle className="text-lg font-semibold md:text-2xl">{chapterName}</CardTitle>
				<CardDescription className="pt-2">
					Last Year (2023): {lastYearQ} Qs
					<br />
					Last 5 Years (2023 - 2019): {last5YearQ} Qs
				</CardDescription>
			</CardHeader>
			<CardContent className="p-0 ml-auto my-auto mr-5">
				<Select>
					<SelectTrigger className="w-24 md:w-36">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="leave">Will Leave</SelectItem>
						<SelectItem value="weak">Weak</SelectItem>
						<SelectItem value="medium">Medium</SelectItem>
						<SelectItem value="strong">Strong</SelectItem>
					</SelectContent>
				</Select>
			</CardContent>
		</Card>
	);
}
