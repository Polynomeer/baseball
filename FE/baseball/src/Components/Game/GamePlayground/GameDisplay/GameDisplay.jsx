import GameDisplayBackground from "./GameDisplayBackground";
// import Runner from "./Runner";
// import Base from "./Base";
// import HomeBase from "./HomeBase";
// import Hitter from "../Hitter";
import { GamePlayground as S } from "@/Components/Game/GameStyles";

const GameDisplay = () => {
  return (
    <S.GameDisplay>
      <GameDisplayBackground />
      {/* <Hitter />
      <Runner />
      <Base />
      <HomeBase /> */}
    </S.GameDisplay>
  );
};

export default GameDisplay;
