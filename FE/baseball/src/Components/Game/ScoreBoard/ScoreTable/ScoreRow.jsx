import AttackTeamTag from '@/Components/Game/ScoreBoard/Teams/AttackTeamTag';
import TeamNameBox from '@/Components/Game/ScoreBoard/Teams/TeamNameBox';
import ScoreItem from './ScoreItem';
import { ScoreBoardStyles as S } from '@/Components/Game/ScoreBoard/ScoreBoardStyles';
import { v4 as uuidv4 } from 'uuid';
import { defaultInning } from '@/Utils/const';

const ScoreRow = ({ teamInfo, isPlayer }) => {
  const { teamName, innings } = teamInfo;

  const isOffense = true;
  const totalScore = 1;
  return (
    <S.ScoreRow {...{ isOffense }}>
      <AttackTeamTag {...{ isOffense }} />
      <TeamNameBox {...{ teamName, isPlayer }} />
      {defaultInning.map((_, idx) => (
        <ScoreItem
          key={uuidv4()}
          inningScore={innings[idx].score}
          {...{ idx, totalScore }}
        />
      ))}
    </S.ScoreRow>
  );
};

export default ScoreRow;
