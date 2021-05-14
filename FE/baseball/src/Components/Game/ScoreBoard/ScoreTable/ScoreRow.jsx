import AttackTeamTag from "@/Components/Game/ScoreBoard/Teams/AttackTeamTag";
import TeamNameBox from "@/Components/Game/ScoreBoard/Teams/TeamNameBox";
import ScoreItem from "./ScoreItem";
import { ScoreBoardStyles as S } from "@/Components/Game/ScoreBoard/ScoreBoardStyles";
import { v4 as uuidv4 } from "uuid";
import { defaultInning } from "@/Utils/const";
import { useContext } from "react";
import { GameContext } from "../../Game";

const ScoreRow = ({ teamInfo, isPlayer, totalScore }) => {
  const { gameData, defenseTeam } = useContext(GameContext);
  const { teamName, innings } = teamInfo;
  let isOffense = teamName !== defenseTeam ? true : false;

  return (
    <S.ScoreRow {...{ isOffense }}>
      <AttackTeamTag {...{ isOffense }} />
      <TeamNameBox {...{ teamName, isPlayer }} />
      {defaultInning.map((_, idx) => (
        <ScoreItem key={uuidv4()} inningScore={innings[idx].score} />
      ))}
      <ScoreItem inningScore={totalScore} />
    </S.ScoreRow>
  );
};

export default ScoreRow;
