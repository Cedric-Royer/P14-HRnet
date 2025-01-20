import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Utiliser le localStorage pour persister l'état
import employeeReducer from "./employeeSlice";
import { migrateEmployeesFromStorageIfNeeded } from "../services/employeeMigrationService";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: {
    employees: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
  }),
});

export const persistor = persistStore(store, null, () => {
    migrateEmployeesFromStorageIfNeeded(store.dispatch);
  });

store.subscribe(() => {
    const state = store.getState();
    console.log("State du store:", state);
  });

const state = store.getState();
try {
  console.log("État sérialisable:", JSON.stringify(state));
} catch (error) {
  console.error("Erreur de sérialisation dans l'état:", error);
}
