import { GymGrid } from "./components/GymGrid";
import { JoinGym } from "./components/JoinGym";
import { Gym } from "@/pages/Dashboard/types/gym";
import AppLayout from "./components/AppLayout";

export default function GymsPage() {
	const gyms: Gym[] = [
		{
			id: "1",
			name: "FitZone Elite",
			description: "Premium fitness facility with state-of-the-art equipment.",
			memberCount: 250,
			address: "123 Fitness Ave, New York, NY 10001",
			logoUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=256&h=256&fit=crop",
		},
		{
			id: "2",
			name: "PowerHouse Gym",
			description: "Strength training focused gym with expert trainers.",
			memberCount: 180,
			address: "456 Muscle St, New York, NY 10002",
		},
	];

	const handleCreateGym = () => {
		console.log("Create gym clicked");
	};

	const handleGymClick = (id: string) => {
		console.log("Gym clicked:", id);
	};

	const handleJoinGym = (code: string) => {
		console.log("Join gym with code:", code);
	};

	return (
		<AppLayout>
			<div className="min-h-screen bg-[#121212] py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<h1 className="text-3xl font-bold text-white">Your Gyms</h1>
					</div>

					<GymGrid gyms={gyms} onCreateClick={handleCreateGym} onGymClick={handleGymClick} />

					<JoinGym onJoin={handleJoinGym} />
				</div>
			</div>
		</AppLayout>
	);
}
