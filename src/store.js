// store.js
// Created on: October 1, 2023
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Custom middleware to persist the event filter and home organization selection to AsyncStorage
const persistDataMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

// Define the Redux Persist configuration
const persistConfig = {
  key: "persist-key",
  storage,
};

// Wrap the root reducer with Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer and middleware
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: [thunk, persistDataMiddleware],
});

// Create a persistor for the store
const persistor = persistStore(store);

export default store;
export { persistor };
