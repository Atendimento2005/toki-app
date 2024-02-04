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

export default function TimeStats() {
	return (
		<Card className="w-full h-72 my-12">
			<CardHeader className="text-left">
				<CardTitle className="text-2xl">Today&apos;s stats</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-5 h-52">
				<h1 className="text-6xl font-bold col-span-3 text-center grid place-items-center">09:05:21</h1>
				<div className="border col-span-2 rounded-lg grid place-items-center">
					insert fancy chart here
				</div>
			</CardContent>
		</Card>
	);
}
