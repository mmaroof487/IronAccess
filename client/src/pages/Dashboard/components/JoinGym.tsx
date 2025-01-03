import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface JoinGymProps {
	onJoin: (code: string) => void;
}

export const JoinGym: React.FC<JoinGymProps> = ({ onJoin }) => {
	const [code, setCode] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (code.trim()) {
			onJoin(code.trim());
		}
	};

	return (
		<div className="mt-8 pt-8 border-t border-[#3e3e3e]">
			<h2 className="text-xl font-semibold text-white mb-4">Join a Gym</h2>
			<form onSubmit={handleSubmit} className="flex gap-4">
				<input
					type="text"
					value={code}
					onChange={(e) => setCode(e.target.value)}
					placeholder="Enter gym invitation code"
					className="flex-1 px-4 py-2 bg-[#2e2e2e] border border-[#3e3e3e] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#f04e3c] focus:border-[#f04e3c]"
				/>
				<button
					type="submit"
					disabled={!code.trim()}
					className="flex items-center px-6 py-2 bg-[#f04e3c] text-white rounded-lg font-medium hover:bg-[#f04e3c]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f04e3c] focus:ring-offset-[#121212] disabled:opacity-50 disabled:cursor-not-allowed">
					Join
					<ArrowRight className="ml-2 h-4 w-4" />
				</button>
			</form>
		</div>
	);
};
