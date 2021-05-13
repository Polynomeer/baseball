import ScoreRow from './ScoreRow';
import ScoreRowHead from './ScoreRowHead';
import { ScoreBoardStyles as S } from '@/Components/Game/ScoreBoard/ScoreBoardStyles';
import { scores } from '../temp_Scores';

const ScoreTable = ({ gameData, teamName }) => {
  if (!gameData) return null;
  const away = gameData.away;
  const home = gameData.home;
  const isPlayer = (name) => {
    return name === teamName ? true : false;
  };

  return (
    <S.ScoreTable>
      <ScoreRowHead {...{ gameData }} />
      <S.ScoreMiddleLine />
      <ScoreRow teamInfo={away} isPlayer={isPlayer(away.teamName)} />
      <ScoreRow teamInfo={home} isPlayer={isPlayer(home.teamName)} />
    </S.ScoreTable>
  );
};

export default ScoreTable;
