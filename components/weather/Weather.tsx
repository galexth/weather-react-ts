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

export default function Weather({ date }: Props) {
  const { lat, lon } = useSelector(getActiveLocation);
  const { data, error, isFetching } = useTimemachineQuery(
    {
      lat,
      lon,
      ts: moment(date).unix(),
    },
    { skip: moment(date).isSameOrAfter(new Date(), "day") }
  );

  return (
    <div className="flex">
      {isFetching && <Spinner size={60} />}
      {data && !isFetching && (
        <Fragment>
          <div className="pr-4">
            <Image
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt={data.description}
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="text-2xl">{data.temp} &#8451;</div>
            <div className="text-xl">{data.title}</div>
            <div className="text-sm">{data.description}</div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
