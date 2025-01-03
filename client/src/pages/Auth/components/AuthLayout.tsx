import React from "react";
import { GoogleButton } from "./GoogleButton.tsx";
import { AuthDivider } from "./AuthDivider.tsx";

interface AuthLayoutProps {
	title: string;
	subtitle: string;
	children: React.ReactNode;
	footerText: string;
	footerLinkText: string;
	onFooterClick: () => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children, footerText, footerLinkText, onFooterClick }) => {
	return (
		<div className="min-h-screen bg-[#121212] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-white">{title}</h2>
				<p className="mt-2 text-center text-sm text-zinc-400">
					{subtitle}{" "}
					<button onClick={onFooterClick} className="font-medium text-[#f04e3c] hover:text-[#f04e3c]/90">
						{footerLinkText}
					</button>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-[#1e1e1e] py-8 px-4 shadow sm:rounded-lg sm:px-10">
					{children}
					<AuthDivider />
					<GoogleButton />

					<p className="mt-6 text-center text-sm text-zinc-400">
						{footerText}{" "}
						<button onClick={onFooterClick} className="font-medium text-[#f04e3c] hover:text-[#f04e3c]/90">
							{footerLinkText}
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};
