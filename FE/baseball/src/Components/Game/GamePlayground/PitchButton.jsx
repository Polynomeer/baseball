import { useState } from "react";
import { playDelayTime } from "@/Utils/const";
import { GamePlayground as S } from "@/Components/Game/GameStyles";

const PitchButton = ({ dispatch }) => {
  const [buttonFlag, setButtonFlag] = useState(false);
  return (
    <S.PitchButton
      disabled={buttonFlag}
      onClick={() => {
        dispatch({ type: pitch() });
        handleButtonFlag(setButtonFlag);
      }}
    >
      Pitch
    </S.PitchButton>
  );
};

const pitch = () => {
  const pitchAction = ["STRIKE", "BALL"];
  const randomNumber = Math.floor(Math.random() * 2);
  return pitchAction[randomNumber];
};

const handleButtonFlag = (setButtonFlag) => {
  setButtonFlag((prev) => !prev);
  setTimeout(() => {
    setButtonFlag((prev) => !prev);
  }, playDelayTime);
};

export default PitchButton;
