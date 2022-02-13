import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse } from "pages/api/weather";

type TimemachineRequest = {
  lat: number;
  lon: number;
  ts: number;
};
type FutureRequest = {
  lat: number;
  lon: number;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/weather",
  }),
  keepUnusedDataFor: 100,
  endpoints(builder) {
    return {
      fetchData: builder.query<WeatherResponse, TimemachineRequest>({
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
      timemachine: builder.query<WeatherResponse, TimemachineRequest>({
        query: ({ lat, lon, ts }) => {
          return {
            url: "timemachine",
            params: {
              lat: lat,
              lon: lon,
              ts: ts,
            },
          };
        },
      }),
      future: builder.query<WeatherResponse, FutureRequest>({
        query: ({ lat, lon }) => {
          return {
            url: "future",
            params: {
              lat: lat,
              lon: lon,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchDataQuery, useFutureQuery, useTimemachineQuery } =
  apiSlice;
