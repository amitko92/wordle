import React from "react";
import style from "./mainContent.module.css";
import DisplayAttempts from "./DisplayAttempts";
import InputDesplay from "./inputUser/InputDesplay";
import Keyboard from "../keyboard/Keyboard";
import Modal from "../modal/Modal";
import ModalHaeder from "../modal/ModalHaeder";
import ModalBody from "../modal/ModalBody";
import { useGameContext } from "../../context/gameContext";
import { gameAtom, isMWNFoundOpenAtom, isModalOpenAtom } from "../../atoms/historyAtom";
import { useAtom } from "jotai";
import { useModal } from "../../hooks/useModal";

const MainContent = () => {
  const { closeModal } = useModal();
  const { hadlePressKeyBoard } = useGameContext();
  const [stateGame] = useAtom(gameAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const [isMWNFoundOpen, setIsMWNFoundOpen] = useAtom(isMWNFoundOpenAtom);
  

  const modal = (
    <Modal isOpen={isModalOpen}>
      <ModalHaeder closingFunc={closeModal} title="finesh!" />
      <ModalBody>
        <h3>{stateGame.gameStatus}</h3>
        <div>{stateGame.word}</div>
      </ModalBody>
    </Modal>
  );

  const modalWordNotFound = (
    <Modal isOpen={isMWNFoundOpen}>
      <ModalHaeder closingFunc={() => setIsMWNFoundOpen(false)} title="Wrong word!" />
      <ModalBody>
        <p>
          The word is not a part of the pre difend list of word.
          <br/>
          Please chsoe another word.
        </p>
      </ModalBody>
    </Modal>
  );

  return (
    <>
      {modal}
      {modalWordNotFound}
      <div className={style.mainContent}>
        <DisplayAttempts />
        <InputDesplay />
        <div className={style.keyboardCon}>
        <Keyboard hadlePressKeyBoard={hadlePressKeyBoard} />
        </div>
      </div>
    </>
  );
};

export default MainContent;
