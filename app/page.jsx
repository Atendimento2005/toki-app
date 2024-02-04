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

import Greeting from "@/components/dashboard/greeting"
import TimeStats from "@/components/dashboard/time-stats";

export default function Home() {
	return (
		<main className="h-screen w-screen grid grid-cols-5">
			<div className="left-nav col-span-1 border-r-2 mr-10">
				hello
			</div>
			<div className="dashboard col-span-3 px-12 py-16">
				<Greeting user="bhutta"/>
				<TimeStats />
			</div>
			<div className="right-nav col-span-1 border-l-2 flex justify-center px-8">
				<HoursStudiedWidget />
			</div>
		</main>
	);
}