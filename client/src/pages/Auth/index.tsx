import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { AuthLayout } from "./components/AuthLayout";

export default function App() {
	const [isLogin, setIsLogin] = useState(true);
	const toggleAuthMode = () => {
		setIsLogin(!isLogin);
	};

	if (isLogin) {
		return (
			<>
				<AuthLayout title="Sign in to your account" subtitle="Or" footerText="Don't have an account?" footerLinkText="Sign up now" onFooterClick={toggleAuthMode}>
					<Login />
				</AuthLayout>
			</>
		);
	}

	return (
		<>
			<AuthLayout title="Create your account" subtitle="Or" footerText="Already have an account?" footerLinkText="Sign in" onFooterClick={toggleAuthMode}>
				<Signup />
			</AuthLayout>
		</>
	);
}
