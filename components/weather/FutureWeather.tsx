import Spinner from "@components/ui/Spinner";
import { getActiveLocation } from "features/location/selectors";
import { useFutureQuery } from "features/weather/weather-api-slice";
import moment from "moment";
import Image from "next/image";
import { Fragment } from "react";
import { useSelector } from "react-redux";

type Props = {
  date: any;
};

export default function FutureWeather({ date }: Props) {
  const { lat, lon } = useSelector(getActiveLocation);
  const { data, error, isFetching } = useFutureQuery({
    lat,
    lon,
  });

  if (!data) {
    return null;
  }

  const weather = data.daily.find(({ dt }) =>
    moment(date).isSame(moment.unix(dt), "day")
  );

  return (
    <div className="flex">
      {isFetching && <Spinner size={60} />}
      {weather && !isFetching && (
        <Fragment>
          <div className="pr-4">
            <Image
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="text-2xl">
              {Math.round(weather.temp.min)} ... {Math.round(weather.temp.max)}{" "}
              &#8451;
            </div>
            <div className="text-xl">{weather.weather[0].title}</div>
            <div className="text-sm">{weather.weather[0].description}</div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
