import axios from "axios";
import { apiConfig } from "config";

export function forecast(
  lat: number,
  lon: number,
  exclude: Array<string> = ["minutely", "alerts"]
) {
  const params = {
    params: {
      lat,
      lon,
      exclude: exclude.join(","),
      appid: apiConfig.appid,
      units: apiConfig.units,
    },
  };

  return axios.get(apiConfig.baseUri, params);
}

export function timemachine(lat: number, lon: number, dt: number) {
  const params = {
    params: {
      lat,
      lon,
      dt: dt,
      appid: apiConfig.appid,
      units: apiConfig.units,
    },
  };

  return axios.get(apiConfig.baseUri + "/timemachine", params);
}
