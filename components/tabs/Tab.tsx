import { City } from "features/location/location-slice";

type Props = {
  city: City;
  onChange: (id: string) => void;
};

export default function Tab({ city, onChange }: Props) {
  return (
    <li className={`tab ${city.active ? "active" : ""}`}>
      <button
        role="tab"
        className="block w-full leading-10 md:px-4"
        onClick={() => onChange(city.id)}
      >
        {city.label}
      </button>
    </li>
  );
}
