import Tabs from "@components/tabs/Tabs";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { NextPage } from "next";
import PastWeather from "@components/weather/PastWeather";
import FutureWeather from "@components/weather/FutureWeather";

const Home: NextPage = () => {
  const [date, setDate] = useState<Date>(moment().startOf("day").toDate());

  const handleDayChange = (value: Date) => {
    setDate(value);
  };

  const isPast = moment(date).isBefore(new Date(), "day");

  return (
    <div className="p-4 md:p-8 max-w-screen-lg">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <Tabs />
      <div className="flex flex-nowrap flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-8">
        <div className="h-28">
          {isPast ? <PastWeather date={date} /> : <FutureWeather date={date} />}
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
