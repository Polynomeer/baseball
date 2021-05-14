import GameDisplayBackground from '@/Components/Game/GamePlayground/GameDisplay/GameDisplayBackground';
import { v4 as uuidv4 } from 'uuid';
import Runner from './Runner';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { getAPI, putAPI } from '@/Utils/API';
import { useContext, useEffect } from 'react';
import { GameContext } from '@/Components/Game/Game';

const GameDisplay = () => {
  const {
    aniState,
    setAniState,
    baseList,
    baseListDispatch,
    totalScore,
    setTotalScore,
    gameId,
    setGameScoreData,
    offenseTeam,
  } = useContext(GameContext);

  useEffect(() => {
    if (baseList.length === 4) {
      setTimeout(async () => {
        baseListDispatch({ type: 'SCORE' });
        setTotalScore({ ...totalScore, home: totalScore.home + 1 });
        await putAPI.endInning(gameId, {
          teamName: offenseTeam,
          number: 1,
          score: 1,
        });
        getAPI.score(gameId).then((res) => {
          setGameScoreData(res.data);
        });
        setAniState(false);
      }, 1500);
    }
  }, [baseList]);
  return (
    <S.GameDisplay>
      <GameDisplayBackground />
      {baseList.map((runner) => (
        <Runner type={runner.base} aniState={aniState} key={uuidv4()} />
      ))}
    </S.GameDisplay>
  );
};

export default GameDisplay;
