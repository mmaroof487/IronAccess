import React from "react";
import { Plus } from "lucide-react";

interface CreateGymCardProps {
	onClick: () => void;
}

export const CreateGymCard: React.FC<CreateGymCardProps> = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="border-2 border-dashed border-[#3e3e3e] p-6 rounded-lg hover:border-[#f04e3c] transition-colors duration-200 h-full min-h-[160px] flex flex-col items-center justify-center group">
			<Plus className="w-8 h-8 text-[#3e3e3e] group-hover:text-[#f04e3c] mb-2" />
			<span className="text-sm font-medium text-zinc-400 group-hover:text-[#f04e3c]">Create Gym</span>
		</button>
	);
};
