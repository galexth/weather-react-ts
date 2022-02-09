import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";
import { show } from "features/modal/modal-slice";

export const queryMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      api.dispatch(
        show({
          title: "Something went wrong",
          message: action.payload.data.message,
        })
      );
    }

    return next(action);
  };
