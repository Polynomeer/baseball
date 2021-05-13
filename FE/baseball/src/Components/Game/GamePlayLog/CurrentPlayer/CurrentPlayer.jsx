import PlayerBox from "./PlayerBox";
import { GamePlayLog as S } from "@/Components/Game/GameStyles";

const CurrentPlayer = ({ currentPlayer }) => {
  return (
    <S.CurrentPlayer.CurrentPlayer>
      <PlayerBox />
      <PlayerBox />
    </S.CurrentPlayer.CurrentPlayer>
  );
};

export default CurrentPlayer;
