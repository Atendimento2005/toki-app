import Pie, { ProvidedProps, PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { Check } from "lucide-react";

// const sampleData = [
// 	{ status: "willLeave", count: 3 },
// 	{ status: "weak", count: 9 },
// 	{ status: "medium", count: 7 },
// 	{ status: "strong", count: 4 },
// ];

const statusColors = {
	untracked: "hsl(220 8.9% 46.1%)",
	willLeave: "#64748b",
	weak: "#ef4444",
	medium: "#f97316",
	strong: "#22c55e",
};

const getCount = (elem) => elem.count;
const getColor = (status) => statusColors[status];

export default function StatusPieChart({
	side,
	data,
	events = false,
	innerRadius,
	className,
}) {
	const sum = data.reduce((sum, cur) => sum + cur.count, 0);
	const untracked = data.filter((elem) => elem.status === "untracked")[0].count;

	const outerRadius = side / 2;

	return (
		// Width and height of chart svg
		<div className="relative">
			<Check size={56} strokeWidth={3} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
			<svg width={side} height={side} className={className}>
				{/*Position of center of chart*/}
				<Group top={side / 2} left={side / 2}>
					<Pie
						className="w-72 h-72"
						data={data}
						pieValue={getCount}
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						padAngle={0.05}
					>
						{(pie) => {
							return pie.arcs.map((arc, index) => {
								const { status } = arc.data;
								const arcPath = pie.path(arc);
								const arcFill = getColor(status);
								return (
									<g key={`arc-${status}-${index}`}>
										<path d={arcPath} fill={arcFill}></path>
									</g>
								);
							});
						}}
					</Pie>
				</Group>
			</svg>
		</div>
	);
}
