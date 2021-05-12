import ScoreTable from './ScoreTable/ScoreTable';
import { ScoreBoardStyles as S } from './ScoreBoardStyles';
import { useContext, useEffect, useState } from 'react';
import PopUpButton from './PopUpButton';
import { getAPI } from '@/Utils/API';
import { GameContext } from '@/Components/Game/Game';

const ScoreBoard = () => {
  const initialScoreBoardPosition = -199;
  const [isHover, setIsHover] = useState(false);
  const [scoreBoardPosition, setScoreBoardPosition] = useState(
    initialScoreBoardPosition
  );
  const [gameData, setGameData] = useState(null);
  const [error, setError] = useState(null);

  const { gameId, teamName } = useContext(GameContext);

  const handleMouseEnter = () => {
    setIsHover((prev) => !prev);
    setScoreBoardPosition(-3);
  };

  const handleMouseLeave = () => {
    setIsHover((prev) => !prev);
    setScoreBoardPosition(initialScoreBoardPosition);
  };

  useEffect(() => {
    getAPI
      .score(gameId)
      .then((res) => {
        if (res && res.data) setGameData(res.data);
        else throw Error();
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <S.PopUpBackground isHover={isHover} />
      <S.ScoreBoard
        isHover={isHover}
        scoreBoardPosition={scoreBoardPosition}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ScoreTable {...{ gameData, teamName }} />
        <PopUpButton {...{ isHover }} />
      </S.ScoreBoard>
    </>
  );
};

export default ScoreBoard;
