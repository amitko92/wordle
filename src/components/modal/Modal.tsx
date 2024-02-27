import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ isOpen, children }: Props) => {
  if (!isOpen) return null;

  const el: any = document.getElementById('portal');

  return ReactDOM.createPortal(
    <>
      <div className={style.overlay}></div>
      <div className={style.modal}>{children}</div>
    </>,
     el
  );
};

export default Modal;
