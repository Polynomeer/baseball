import { useContext } from "react";
import { GameContext } from "@/Components/Game/Game";
import CurrentPlayer from "./CurrentPlayer/CurrentPlayer";
import PlayerLog from "./PlayerLog/PlayerLog";
import { GamePlayLog as S } from "@/Components/Game/GameStyles";

const GamePlayLog = () => {
  const value = useContext(GameContext);
  // 디

  return (
    <S.GamePlayLog>
      <CurrentPlayer />
      <PlayerLog />
    </S.GamePlayLog>
  );
};

export default GamePlayLog;
