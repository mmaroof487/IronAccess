import { IUser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	user: IUser | null;
	token: string;
};
const loadFromLocalStorage = (): State => {
	const savedUser = localStorage.getItem("user");
	const savedToken = localStorage.getItem("token");

	return {
		user: savedUser ? JSON.parse(savedUser) : null,
		token: savedToken || "",
	};
};

const initialState: State = loadFromLocalStorage();

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser | null>) => {
			state.user = action.payload;
			if (action.payload) {
				localStorage.setItem("user", JSON.stringify(action.payload));
			} else {
				localStorage.removeItem("user");
			}
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			localStorage.setItem("token", action.payload);
		},
	},
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
