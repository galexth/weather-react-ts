import Image from "next/image";

export default function WeatherDay({ day }) {
  console.log(day.weather);

  const weather = day.weather[0];
  return (
    <div className="basis-20 rounded shadow-xl p-4 border border-neutral-100">
      <div>
        <Image
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          width={100}
          height={100}
        />
      </div>
      <div>
        <div>
          <span className="text-4xl pb-2">{Math.round(day.temp.day)}</span>{" "}
          <span className="align-top">&#8451;</span>
        </div>
        <div className="text-xl">
          <div className="inline-block">
            <span className="">{Math.round(day.temp.min)}</span>{" "}
            <span className="align-top text-sm">&#8451;</span>
          </div>
          {"  ...  "}
          <div className="inline-block">
            <span className="">{Math.round(day.temp.max)}</span>{" "}
            <span className="align-top text-sm">&#8451;</span>
          </div>
        </div>
        <div className="text-xl">{weather.main}</div>
        <div className="text-sm pb-2">{weather.description}</div>
        <div className="text-sm">Wind: {Math.round(day.wind_speed)} m/s</div>
      </div>
    </div>
  );
}
