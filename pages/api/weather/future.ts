import axios from "axios";
import { apiConfig } from "config";
import type { NextApiRequest, NextApiResponse } from "next";

type Exception = {
  message: string;
};
export type WeatherResponse = {
  temp: number;
  title: string;
  description: string;
  icon: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResponse | Exception>
) {
  const { lat, lon } = req.query;

  const params = {
    params: {
      lat,
      lon,
      exclude: ["minutely", "alerts"].join(","),
      appid: apiConfig.appid,
      units: apiConfig.units,
    },
  };

  try {
    const { data } = await axios.get(apiConfig.baseUri, params);

    return res.json(data);
  } catch (error: any) {
    return res.status(400).json({
      message: error.response?.data?.message || "Something went wrong.",
    });
  }
}
