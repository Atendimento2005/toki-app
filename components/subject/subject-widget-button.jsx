import { Button } from "@/components/ui/button";

export default function SubjectWidgetButton({ icon, subject }) {
	return (
		<Button variant="subject-widget-button">
			{icon}
			{subject}
		</Button>
	);
}
