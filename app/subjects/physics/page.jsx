import "@/app/globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronLeft, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ChapterCardWidget from "@/components/chapter-card/chapter-card-widget";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Emoji from "@/components/ui/emoji";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import StatusWidget from "./status-widget";
import StatusPieChart from "./status-pie-chart";
import StatusLabel from "./status-label";

export default function Physics() {
	return (
		<div className="w-screen flex flex-col items-center">
			<div className="w-5/6 md:w-full max-w-screen-md">
				<Button size="icon" variant="secondary" className="my-5">
					<ChevronLeft />
				</Button>
				<div className="flex flex-row gap-3 items-center">
					<Emoji symbol="📏" className="text-4xl"></Emoji>
					<h1 className="font-bold text-4xl md:text-5xl">Physics</h1>
				</div>
				<Separator className="my-3"></Separator>
				<Tabs defaultValue="progress">
					<TabsList className="w-full gap-3 md:h-11">
						<TabsTrigger value="progress" className="w-1/2 md:text-md md:py-2">
							Progress
						</TabsTrigger>
						<TabsTrigger value="chapters" className="w-1/2 md:text-md md:py-2">
							Chapters
						</TabsTrigger>
					</TabsList>
					<TabsContent value="progress">
						<div className="flex flex-row gap-5 items-center w-full mb-3">
							<StatusPieChart
								className="md:m-10 m-5"
								side={150}
								data={[
									{ status: "willLeave", count: 3 },
									{ status: "weak", count: 9 },
									{ status: "medium", count: 7 },
									{ status: "strong", count: 4 },
									{ status: "untracked", count: 5 },
								]}
								innerRadius={65}
							/>
							<div className="flex flex-col gap-3">
								<StatusLabel status="willLeave"/>
								<StatusLabel status="weak"/>
								<StatusLabel status="medium"/>
								<StatusLabel status="strong"/>
							</div>
						</div>
						<div className="flex flex-wrap gap-3 last:mb-3">
							<StatusWidget count={10} variant="willLeave"></StatusWidget>
							<StatusWidget count={10} variant="weak"></StatusWidget>
							<StatusWidget count={10} variant="medium"></StatusWidget>
							<StatusWidget count={10} variant="strong"></StatusWidget>
						</div>
					</TabsContent>
					<TabsContent value="chapters">
						<div className="flex flex-col gap-3 last:mb-3">
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
							<ChapterCardWidget
								chapterName="Current Electricity"
								lastYearQ={10}
								last5YearQ={50}
							/>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
