import Spinner from "@components/ui/Spinner";
import { getActiveLocation } from "features/location/selectors";
import { useTimemachineQuery } from "features/weather/weather-api-slice";
import moment from "moment";
import Image from "next/image";
import { Fragment } from "react";
import { useSelector } from "react-redux";

type Props = {
  date: any;
};

export default function PastWeather({ date }: Props) {
  const { lat, lon } = useSelector(getActiveLocation);
  const { data, error, isFetching } = useTimemachineQuery({
    lat,
    lon,
    ts: moment(date).unix(),
  });

  if (data) {
    const first = data.hourly[0];
    const last = data.hourly[data.hourly.length - 1];
  }

  return (
    <div className="flex">
      {isFetching && <Spinner size={60} />}
      {data && !isFetching && (
        <Fragment>
          <div className="pr-4">
            <Image
              src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
              alt={data.current.weather[0].description}
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="text-2xl">
              {Math.round(first.temp)} ... {Math.round(last.temp)} &#8451;
            </div>
            <div className="text-xl">{data.current.weather[0].title}</div>
            <div className="text-sm">{data.current.weather[0].description}</div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
