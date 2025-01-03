import React from "react";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
	icon: LucideIcon;
	label: string;
	isExpanded: boolean;
	isActive?: boolean;
	onClick: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, isExpanded, isActive, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`
        w-full flex items-center px-3 py-3 rounded-lg
        transition-colors duration-200
        ${isActive ? "bg-white/20 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}
      `}>
			<Icon className="w-6 h-6 flex-shrink-0" />
			{isExpanded && <span className="ml-3 text-sm font-medium whitespace-nowrap">{label}</span>}
		</button>
	);
};
