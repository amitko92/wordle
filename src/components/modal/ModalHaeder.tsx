import React from "react";
import style from "./modal.module.css";
import svg from "../../asset/icons/Icon.svg";

type Props = {
  closingFunc: () => void;
  title: string;
};

const ModalHaeder = ({ closingFunc, title }: Props) => {
  return (
    <div className={style.header}>
      <div className={style.emptyDiv}></div>
      <div className={style.titleDiv}>{title}</div>
      <div className={style.closingBtnDiv}><button className={style.closingBtn} onClick={closingFunc}><img style={{width: '100%'}} src={svg}/></button></div>
    </div>
  );
};

export default ModalHaeder;
