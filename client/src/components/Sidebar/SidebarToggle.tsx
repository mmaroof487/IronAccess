import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarToggleProps {
	isExpanded: boolean;
	onToggle: () => void;
}

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ isExpanded, onToggle }) => {
	return (
		<button onClick={onToggle} className="absolute -right-3 top-6 bg-[#f04e3c] p-1.5 rounded-full text-white hover:bg-[#f04e3c]/90 transition-colors duration-200">
			{isExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
		</button>
	);
};
