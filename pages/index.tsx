import Tabs from "@components/tabs/Tabs";
import Spinner from "@components/ui/Spinner";
import Weather from "@components/weather/Weather";
import { useFetchDataQuery } from "features/weather/weather-api-slice";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { getActiveLocation } from "features/location/selectors";

const Home: NextPage = () => {
  const [date, setDate] = useState<Date>(moment().startOf("day").toDate());
  const { lat, lon } = useSelector(getActiveLocation);
  const { data, error, isFetching } = useFetchDataQuery({
    lat,
    lon,
    ts: moment(date).unix(),
  });

  const handleDayChange = (value: Date) => {
    setDate(value);
  };

  return (
    <div className="p-4 md:p-8 max-w-screen-lg">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <Tabs />
      <div className="flex flex-nowrap flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-8">
        <div className="h-28">
          {data && (
            <Weather
              temp={data.temp}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          )}
          {isFetching && <Spinner size={60} />}
        </div>
        <div className="drop-shadow-xl">
          <Calendar
            className={"!border-slate-200"}
            calendarType="ISO 8601"
            value={date}
            onChange={handleDayChange}
            locale={"en-US"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
