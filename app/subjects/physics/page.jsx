import "@/app/globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronLeft, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ChapterCardWidget from "@/components/chapter-card/chapter-card-widget";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Physics() {
	return (
		<div className="w-screen flex flex-col items-center">
			<div className="w-5/6 md:w-full max-w-screen-md">
				<Button size="icon" variant="secondary" className="my-5">
					<ChevronLeft />
				</Button>
				<div className="flex flex-row gap-3 items-center">
					<Ruler size={38} />
					<h1 className="font-bold text-4xl md:text-5xl">Physics</h1>
				</div>
				<Separator className="my-3"></Separator>
				<Tabs>
					<TabsList className="w-full gap-3 md:h-11">
						<TabsTrigger value="progress" className="w-1/2 md:text-md md:py-2">Progress</TabsTrigger>
						<TabsTrigger value="chapters" className="w-1/2 md:text-md md:py-2">Chapters</TabsTrigger>
					</TabsList>
					<TabsContent value="progress"></TabsContent>
					<TabsContent value="chapters">
						<div className="flex flex-col gap-3">
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
