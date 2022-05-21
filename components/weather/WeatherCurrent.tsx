import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function WeatherCurrent({ day }) {
  console.log(day);

  const weather = day.weather[0];
  return (
    <div className="rounded shadow-xl p-4 mt-4 border border-neutral-100">
      <div className="flex">
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            width={100}
            height={100}
          />
        </div>
        <div className="pl-4 pr-4">
          <div className="text-xl pb-2">
            {moment
              .unix(day.dt)
              .utcOffset(day.timezone_offset / 60)
              .format("ddd, D MMM H:mm")}
          </div>
          <div>
            <span className="text-4xl pb-2">{Math.round(day.temp)}</span>{" "}
            <span className="align-top">&#8451;</span>
          </div>
          <div className="text-xl">{weather.main}</div>
          <div className="text-sm pb-2">{weather.description}</div>
        </div>
        <div>
          <div className="text-sm">
            Feels like: {Math.round(day.feels_like)} &#8451;
          </div>
          <div className="text-sm">Humidity: {day.humidity} %</div>
          <div className="text-sm">
            Wind: {Math.round(day.wind_speed)} m/s
            <FontAwesomeIcon
              className="pl-2"
              transform={{ rotate: day.wind_deg }}
              size="lg"
              icon={faLocationArrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
