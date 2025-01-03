import { Sidebar } from "@/components/Sidebar";

interface AppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1 bg-[#121212]">{children}</main>
		</div>
	);
}
