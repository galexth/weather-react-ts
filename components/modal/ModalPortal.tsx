import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: ReactNode;
};

function ModalPortal({ children }: Props) {
  const content = (
    <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white px-8 md:px-16 py-6 rounded-md text-center">
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-root")!);
}

export default ModalPortal;
