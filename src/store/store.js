import { configureStore } from "@reduxjs/toolkit";
import { shippingApi } from "./shippingApi";

export const store = configureStore({
  reducer: {
    [shippingApi.reducerPath]: shippingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shippingApi.middleware),
});
