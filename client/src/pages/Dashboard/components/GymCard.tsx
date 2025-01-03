import React from "react";
import { Dumbbell } from "lucide-react";
import type { Gym } from "@/pages/Dashboard/types/gym";

interface GymCardProps {
	gym: Gym;
	onClick: () => void;
}

export const GymCard: React.FC<GymCardProps> = ({ gym, onClick }) => {
	return (
		<button onClick={onClick} className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg hover:bg-[#2e2e2e] transition-colors duration-200 text-left w-full group">
			<div className="flex items-center space-x-4 mb-4">
				{gym.logoUrl ? (
					<img src={gym.logoUrl} alt={gym.name} className="w-12 h-12 rounded-lg object-cover" />
				) : (
					<div className="w-12 h-12 rounded-lg bg-[#3e3e3e] flex items-center justify-center">
						<Dumbbell className="w-6 h-6 text-[#f04e3c]" />
					</div>
				)}
				<div>
					<h3 className="text-lg font-semibold text-white group-hover:text-[#f04e3c] transition-colors duration-200">{gym.name}</h3>
					<p className="text-sm text-zinc-400">{gym.memberCount} members</p>
				</div>
			</div>
			<p className="text-sm text-zinc-400 mb-2">{gym.description}</p>
			<p className="text-xs text-zinc-500">{gym.address}</p>
		</button>
	);
};
