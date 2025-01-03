import React from "react";
import { GymCard } from "./GymCard.tsx";
import { CreateGymCard } from "./CreateGymCard.tsx";
import type { Gym } from "@/pages/Dashboard/types/gym";

interface GymGridProps {
	gyms: Gym[];
	onCreateClick: () => void;
	onGymClick: (id: string) => void;
}

export const GymGrid: React.FC<GymGridProps> = ({ gyms, onCreateClick, onGymClick }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{gyms.map((gym) => (
				<GymCard key={gym.id} gym={gym} onClick={() => onGymClick(gym.id)} />
			))}
			<CreateGymCard onClick={onCreateClick} />
		</div>
	);
};
