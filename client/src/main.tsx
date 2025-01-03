import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import store from "./store";
import config from "./config/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<GoogleOAuthProvider clientId={config.googleClientId}>
			<Provider store={store}>
				<App />
			</Provider>
		</GoogleOAuthProvider>
	</StrictMode>
);
