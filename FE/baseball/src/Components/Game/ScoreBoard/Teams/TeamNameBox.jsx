import CurrentPlayerTag from './CurrentPlayerTag';
import TeamName from './TeamName';
import { ScoreBoardStyles as S } from '@/Components/Game/ScoreBoard/ScoreBoardStyles';

const TeamNameBox = ({ teamName, isPlayer }) => {
  return (
    <S.TeamNameBox>
      <TeamName {...{ teamName }} />
      <CurrentPlayerTag {...{ isPlayer }} />
    </S.TeamNameBox>
  );
};

export default TeamNameBox;
