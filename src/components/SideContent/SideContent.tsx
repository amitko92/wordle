import React from 'react';
import style from './sideContent.module.css';
import { useAtom } from 'jotai';
import { historyAtom } from '../../atoms/historyAtom';

const SideContent = () => {

  const [historyList, setHistoryList] = useAtom(historyAtom);

  return (
    <div className={style.sideContent}>
        <div className={style.historyContainer}>
          <h3>History</h3>
          {historyList.map((history, index) => {
            return (
              <div className={style.historyRow}>
                <span className={style.historyBadge}>{index}</span> status: {history.gameStatus}
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default SideContent