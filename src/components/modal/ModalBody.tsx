import React from "react";
import style from "./modal.module.css";

type Props = {
  children: React.ReactNode;
};

const ModalBody = ({ children }: Props) => {
  return <div className={style.body}>{children}</div>;
};

export default ModalBody;
