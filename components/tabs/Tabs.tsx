import { RootState } from "app/store";
import { setLocation } from "features/location/location-slice";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "./Tab";

function Tabs() {
  const locations = useSelector((state: RootState) => state.location.locations);
  const dispatch = useDispatch();

  const handleTabChange = (cityId: string) => dispatch(setLocation(cityId));

  return (
    <ul className="grid grid-cols-3 md:flex md:flex-wrap border-b border-gray-200 dark:border-gray-700 mt-10">
      {locations.map((city) => (
        <Tab key={city.label} city={city} onChange={handleTabChange} />
      ))}
    </ul>
  );
}

export default memo(Tabs);
