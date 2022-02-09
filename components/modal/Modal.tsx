import ModalPortal from "./ModalPortal";

type Props = {
  title?: string;
  text: string;
  onClose: () => void;
};

export default function Modal({ title = "Error", text, onClose }: Props) {
  const handleClose = () => onClose();

  return (
    <ModalPortal>
      <h1 className="text-xl mb-4 font-bold text-slate-500">{title}</h1>
      <div className="my-6">{text}</div>
      <button
        onClick={handleClose}
        className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
      >
        Close
      </button>
    </ModalPortal>
  );
}
