import React, { useState } from "react";
import { Dumbbell, Users, Calendar, Settings, BarChart3, MessageSquare } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { SidebarToggle } from "./SidebarToggle";

export const Sidebar: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [activePage, setActivePage] = useState("gyms");

	const menuItems = [
		{ id: "gyms", icon: Dumbbell, label: "Gyms" },
		{ id: "members", icon: Users, label: "Members" },
		{ id: "schedule", icon: Calendar, label: "Schedule" },
		{ id: "analytics", icon: BarChart3, label: "Analytics" },
		{ id: "messages", icon: MessageSquare, label: "Messages" },
		{ id: "settings", icon: Settings, label: "Settings" },
	];

	return (
		<div
			className={`
        relative h-screen bg-[#f04e3c] py-6
        transition-all duration-300 ease-in-out
        ${isExpanded ? "w-64" : "w-20"}
      `}>
			<SidebarToggle isExpanded={isExpanded} onToggle={() => setIsExpanded(!isExpanded)} />

			<div className="px-3 mb-8">
				<div className="flex items-center justify-center">
					<Dumbbell className="w-10 h-10 text-white" />
					{isExpanded && <span className="ml-3 text-xl font-bold text-white">FitHub</span>}
				</div>
			</div>

			<nav className="space-y-2 px-3">
				{menuItems.map((item) => (
					<SidebarItem key={item.id} icon={item.icon} label={item.label} isExpanded={isExpanded} isActive={activePage === item.id} onClick={() => setActivePage(item.id)} />
				))}
			</nav>
		</div>
	);
};
