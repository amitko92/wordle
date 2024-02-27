import React, { CSSProperties } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MainContent from "./mainContent/MainContent";
import { useGameContext } from "../context/gameContext";
import Modal from "./modal/Modal";
import ModalHaeder from "./modal/ModalHaeder";
import ModalBody from "./modal/ModalBody";
import { useAtom } from "jotai";
import { gameAtom, isModalOpenAtom } from "../atoms/historyAtom";
import { useModal } from "../hooks/useModal";

const styleDiv: CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
};

const WordleGame = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const [stateGame] = useAtom(gameAtom);
  const { closeModal } = useModal();

  return (
    <>
      <Modal isOpen={isModalOpen}>
        <ModalHaeder closingFunc={closeModal} title="finesh!" />
        <ModalBody>
          <h3>{stateGame.gameStatus}</h3>
          <div>{stateGame.word}</div>
        </ModalBody>
      </Modal>

      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default WordleGame;
