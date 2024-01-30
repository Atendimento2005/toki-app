import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Ruler, FlaskConical, Sigma } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubjectWidgetButton from "@/components/subject/subject-widget-button";


export default function SubjectWidget() {
	return (
		<Card className="w-72">
			<CardHeader>
				<CardTitle className="text-2xl">Subjects</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<SubjectWidgetButton subject="Physics" icon={<Ruler/>} />
				<Separator/>
				<SubjectWidgetButton subject="Chemistry" icon={<FlaskConical/>} />
				<Separator/>
				<SubjectWidgetButton subject="Maths" icon={<Sigma/>} />
			</CardContent>
		</Card>
	);
}
