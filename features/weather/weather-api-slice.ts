import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse } from "pages/api/weather";

type WeatherRequest = {
  lat: number;
  lon: number;
  ts: number;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/weather",
  }),
  keepUnusedDataFor: 100,
  endpoints(builder) {
    return {
      fetchData: builder.query<WeatherResponse, WeatherRequest>({
        query: ({ lat, lon, ts }) => {
          return {
            url: "",
            params: {
              lat: lat,
              lon: lon,
              ts: ts,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchDataQuery } = apiSlice;
