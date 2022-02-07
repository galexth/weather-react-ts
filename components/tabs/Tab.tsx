import { City } from "data/cities";
import { MouseEventHandler } from "react";

type Props = {
  city: City;
  onChange: (city: City) => void;
};

export default function Tab({ city, onChange }: Props) {
  return (
    <li key={city.label} className={`tab ${city.active ? "active" : ""}`}>
      <button
        role="tab"
        className="block w-full leading-10 md:px-4"
        onClick={() => onChange(city)}
      >
        {city.label}
      </button>
    </li>
  );
}
