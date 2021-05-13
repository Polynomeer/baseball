import GameDisplayBackground from '@/Components/Game/GamePlayground/GameDisplay/GameDisplayBackground';
import { v4 as uuidv4 } from 'uuid';
import Runner from './Runner';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useContext } from 'react';
import { GameContext } from '@/Components/Game/Game';

const GameDisplay = () => {
  const { baseList } = useContext(GameContext);

  return (
    <S.GameDisplay>
      <GameDisplayBackground />
      {baseList.map((runner) => (
        <Runner type={runner.base} key={uuidv4()} />
      ))}
    </S.GameDisplay>
  );
};

export default GameDisplay;
