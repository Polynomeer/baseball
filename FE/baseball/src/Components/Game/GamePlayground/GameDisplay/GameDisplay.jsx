import GameDisplayBackground from '@/Components/Game/GamePlayground/GameDisplay/GameDisplayBackground';
import { v4 as uuidv4 } from 'uuid';
import Runner from './Runner';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useContext, useEffect } from 'react';
import { GameContext } from '@/Components/Game/Game';

const GameDisplay = () => {
  const { aniState, setAniState, baseList, baseListDispatch } =
    useContext(GameContext);

  useEffect(() => {
    if (baseList.length === 4) {
      setTimeout(() => {
        baseListDispatch({ type: 'SCORE' });
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
