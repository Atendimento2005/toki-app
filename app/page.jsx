import Image from "next/image";
import "@/app/globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import HoursStudiedWidget from "@/components/hours-studied/hours-studied-widget";
import SubjectWidget from "@/components/subject/subject-widget";
import SubjectWidgetButton from "@/components/subject/subject-widget-button";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Ruler, FlaskConical, Sigma } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChapterCardWidget from "@/components/chapter-card/chapter-card-widget";

export default function Home() {
	return (
		<main className="flex flex-col h-screen w-screen justify-center items-center">
			<ModeToggle className="absolute top-0 left-0"></ModeToggle>
			<HoursStudiedWidget></HoursStudiedWidget>
			<ChapterCardWidget chapterName="Current Electricity" lastYearQ={10} last5YearQ={50} />
		</main>
	);
}
