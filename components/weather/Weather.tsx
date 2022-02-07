import Image from "next/image";

type Props = {
  temp: number;
  icon: string;
  title: string;
  description: string;
};

export default function Weather(props: Props) {
  const { temp, icon, title, description } = props;

  return (
    <div className="flex">
      <div className="pr-4">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          width={100}
          height={100}
        />
      </div>
      <div>
        <div className="text-2xl">{temp} &#8451;</div>
        <div className="text-xl">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
