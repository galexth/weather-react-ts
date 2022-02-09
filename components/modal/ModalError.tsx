import { RootState } from "app/store";
import { close } from "features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import ModalPortal from "./ModalPortal";

export default function ModalError() {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => ({ ...state.modal }));

  if (!modal.isOpen) {
    return null;
  }

  return (
    <ModalPortal>
      <h1 className="text-xl mb-4 font-bold text-slate-500">{modal.title}</h1>
      <div className="my-6">{modal.message}</div>
      <button
        onClick={() => dispatch(close())}
        className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
      >
        Close
      </button>
    </ModalPortal>
  );
}
