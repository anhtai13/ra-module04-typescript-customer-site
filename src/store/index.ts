import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import authReducer from "./reducers/auth.reduder";
import customerCartReducer from "./reducers/customerCart.reducer";

const rootReducer = combineReducers({
  authReducer,
  customerCartReducer,
});

const store: ToolkitStore = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
