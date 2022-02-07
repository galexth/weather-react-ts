import Image from "next/image";

type Props = {
  size: number;
};

export default function Spinner({ size }: Props) {
  return (
    <div>
      <Image src="/tail-spin.svg" alt="Loading..." width={size} height={size} />
    </div>
  );
}
