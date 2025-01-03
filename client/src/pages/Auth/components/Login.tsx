import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { loginUser } from "@/services/api/auth";
import { useAppDispatch } from "@/store";
import toast from "react-hot-toast";
import { IApiError } from "@/types/api";
import { setToken, setUser } from "@/store/user";

export const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useAppDispatch();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const { data } = await loginUser({ email, password });
			dispatch(setUser(data.data));
			dispatch(setToken(data.token));
		} catch (error: unknown) {
			if (error instanceof Error) {
				const apiError = (error as unknown as IApiError)?.response?.data;
				const errorMessage = apiError?.meta?.error_message ?? "Something went wrong";
				console.error(errorMessage);
				toast.error(errorMessage);
			} else {
				console.error("Unexpected error occurred");
				toast.error("Unexpected error occurred");
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 w-full">
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-white">
					Email
				</label>
				<div className="mt-1 relative">
					<input
						id="email"
						type="email"
						required
						className="appearance-none block w-full px-3 py-2 pl-10 bg-[#2e2e2e] border border-[#3e3e3e] rounded-lg shadow-sm placeholder-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-[#f04e3c] focus:border-[#f04e3c]"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Mail className="h-5 w-5 text-zinc-400 absolute left-3 top-2.5" />
				</div>
			</div>

			<div>
				<label htmlFor="password" className="block text-sm font-medium text-white">
					Password
				</label>
				<div className="mt-1 relative">
					<input
						id="password"
						type="password"
						required
						className="appearance-none block w-full px-3 py-2 pl-10 bg-[#2e2e2e] border border-[#3e3e3e] rounded-lg shadow-sm placeholder-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-[#f04e3c] focus:border-[#f04e3c]"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Lock className="h-5 w-5 text-zinc-400 absolute left-3 top-2.5" />
				</div>
			</div>

			<button
				type="submit"
				className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#f04e3c] hover:bg-[#f04e3c]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f04e3c] focus:ring-offset-[#1e1e1e]">
				Sign in
				<ArrowRight className="ml-2 h-4 w-4" />
			</button>
		</form>
	);
};
