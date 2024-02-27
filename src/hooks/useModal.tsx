import { useAtom } from "jotai";
import { GameActionKind } from "../components/reducer/gameReducer";
import { gameAtom, isModalOpenAtom } from "../atoms/historyAtom";

export const useModal = () => {

    const [stateGame, dispatch] = useAtom(gameAtom);
    const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);

    function closeModal() {
        dispatch({
          type: GameActionKind.RESET_GAME,
        });
    
        setIsModalOpen(false);
      }
    
      function openModal() {
        setIsModalOpen(true);
      }

      return {
        closeModal, openModal
      }
}