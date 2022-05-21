import { forecast, timemachine } from "backend/api/weatherApi";
import moment from "moment";
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

  try {
    const values = await Promise.all([
      forecast(+lat, +lon),
      timemachine(+lat, +lon, moment().subtract(1, "day").unix()),
    ]);

    return res.json({
      ...values[0].data,
      yesterday: values[1].data,
      geo: {
        timezone: values[0].data.timezone,
        timezone_offset: values[0].data.timezone_offset,
        lat: values[0].data.lat,
        lon: values[0].data.lon,
      },
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.response?.data?.message || "Something went wrong.",
    });
  }
}
