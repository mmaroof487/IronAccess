import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
	reducer: {
		user: userSlice,
	},
});

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppState = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
