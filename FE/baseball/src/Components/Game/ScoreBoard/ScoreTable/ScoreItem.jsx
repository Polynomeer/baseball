import { ScoreBoardStyles as S } from '@/Components/Game/ScoreBoard/ScoreBoardStyles';

const ScoreItem = ({ inningScore, inning }) => {
  let number = inningScore || inning;
  if (inningScore === 0) number = null;
  if (inningScore === '0') number = inningScore;

  return <S.ScoreItem>{number}</S.ScoreItem>;
};

export default ScoreItem;
