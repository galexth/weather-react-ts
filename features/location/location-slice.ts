import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cities as locations } from "data/cities";

export type City = {
  id: string;
  lat: number;
  lon: number;
  label: string;
  active: boolean;
};

export type LocationState = {
  locations: City[];
};

const initialState: LocationState = {
  locations: locations,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.locations.forEach((location) => {
        location.active = false;

        if (location.id === action.payload) {
          location.active = true;
        }
      });
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
