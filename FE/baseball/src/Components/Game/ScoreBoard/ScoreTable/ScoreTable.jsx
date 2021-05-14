import ScoreRow from './ScoreRow';
import ScoreRowHead from './ScoreRowHead';
import { ScoreBoardStyles as S } from '@/Components/Game/ScoreBoard/ScoreBoardStyles';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../Game';

const ScoreTable = () => {
  const { teamName, gameScoreData, totalScore, setTotalScore } =
    useContext(GameContext);

  const { home, away } = totalScore;

  const isPlayer = (name) => {
    return name === teamName ? true : false;
  };
  const getTotalScore = (list) =>
    list ? list && list.reduce((acc, cur) => (acc += cur.score), 0) : 0;

  useEffect(() => {
    setTotalScore({
      ...totalScore,
      home: getTotalScore(gameScoreData && gameScoreData.home.innings),
      away: getTotalScore(gameScoreData && gameScoreData.away.innings),
    });
  }, []);
  if (!gameScoreData) return null;

  return (
    <S.ScoreTable>
      <ScoreRowHead {...{ gameScoreData }} />
      <S.ScoreMiddleLine />
      <ScoreRow
        teamInfo={gameScoreData.away}
        isPlayer={isPlayer(gameScoreData.away.teamName)}
        totalScore={`${away}`}
      />
      <ScoreRow
        teamInfo={gameScoreData.home}
        isPlayer={isPlayer(gameScoreData.home.teamName)}
        totalScore={`${home}`}
      />
    </S.ScoreTable>
  );
};

export default ScoreTable;
