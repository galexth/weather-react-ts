import { RootState } from "app/store";

export const getActiveLocation = (state: RootState) =>
  state.location.locations.find((i) => i.active)!;
