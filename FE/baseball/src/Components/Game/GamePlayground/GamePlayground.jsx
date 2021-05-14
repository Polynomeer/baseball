import { useContext } from "react";
import { GameContext } from "@/Components/Game/Game";
import InningInfo from "./InningInfo";
import PitchButton from "./PitchButton";
import BallCountBoard from "./BallCountBoard/BallCountBoard";
import { BACKGROUND_URL } from "@/Utils/const";
import { GamePlayground as S } from "@/Components/Game/GameStyles";

const GamePlayground = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <S.GamePlayground>
      <S.Background src={BACKGROUND_URL} />
      <BallCountBoard ballCount={state} dispatch={dispatch} />
      <InningInfo inningInfo={state} dispatch={dispatch} />
      <PitchButton inningInfo={state} dispatch={dispatch} />
    </S.GamePlayground>
  );
};

export default GamePlayground;
