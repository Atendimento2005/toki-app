import { Button } from "@/components/ui/button";

export default function SubjectWidgetButton({ icon, subject }) {
  return (
    <Button variant="subject-widget-button">
      <span className="bg-primary p-2 m-1 rounded-md">{icon}</span>
      {subject}
    </Button>
  );
}
