import "@/app/globals.css";
import {
	Card,
	CardHeader,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HoursStudiedWidget() {
	return (
		<Card className="w-full h-fit ">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">You studied for</CardTitle>
			</CardHeader>
			<CardContent className="text-center flex flex-col gap-6 justify-around items-center">
				<h1 className="text-6xl font-bold text-primary">325</h1>
				<p className="text-muted-foreground font-medium">
					hours this month, this is not much but you can better 
				</p>
				<Button className="px-10 py-6 font-semibold mx-5">
					View detailed report
				</Button>
			</CardContent>
		</Card>
	);
}
