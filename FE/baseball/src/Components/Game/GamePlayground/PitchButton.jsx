import { useEffect, useState } from "react";
import { playDelayTime } from "@/Utils/const";
import { GamePlayground as S } from "@/Components/Game/GameStyles";

const PitchButton = ({ inningInfo, dispatch }) => {
  const [visible, setVisible] = useState("visible");
  let interval;

  useEffect(() => {
    if (!inningInfo.isDefense) {
      setVisible("hidden");
      interval = setInterval(() => {
        dispatch({ type: pitch() });
      }, playDelayTime);
    } else {
      setVisible("visible");
    }
    return () => clearInterval(interval);
  }, [inningInfo]);

  const [buttonFlag, setButtonFlag] = useState(false);
  return (
    <S.PitchButton
      visible={visible}
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
