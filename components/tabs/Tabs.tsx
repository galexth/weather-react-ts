import { City } from "data/cities";
import { MouseEventHandler } from "react";
import Tab from "./Tab";

type Props = {
  cities: City[];
  onTabChange: (city: City) => void;
};

export default function Tabs({ cities, onTabChange }: Props) {
  return (
    <ul className="grid grid-cols-3 md:flex md:flex-wrap border-b border-gray-200 dark:border-gray-700 mt-10">
      {cities.map((city) => (
        <Tab key={city.label} city={city} onChange={onTabChange} />
      ))}
    </ul>
  );
}
