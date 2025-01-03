import React from "react";

export const AuthDivider: React.FC = () => {
	return (
		<div className="relative my-6">
			<div className="absolute inset-0 flex items-center">
				<div className="w-full border-t border-[#3e3e3e]"></div>
			</div>
			<div className="relative flex justify-center text-sm">
				<span className="px-2 bg-[#1e1e1e] text-zinc-400">Or continue with</span>
			</div>
		</div>
	);
};
