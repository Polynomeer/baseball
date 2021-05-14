import { useContext, useEffect, useState } from 'react';
import { playDelayTime } from '@/Utils/const';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { GameContext } from '../Game';

const PitchButton = ({ inningInfo, dispatch }) => {
  const [visible, setVisible] = useState('visible');
  const { baseListDispatch, setAniState } = useContext(GameContext);
  let interval;

  useEffect(() => {
    if (!inningInfo.isDefense) {
      setVisible('hidden');
      interval = setInterval(() => {
        const action = pitch();
        dispatch({ type: action });
        if (action === 'HIT') {
          baseListDispatch({ type: action });
          setAniState(true);
        }
      }, playDelayTime);
    } else {
      setVisible('visible');
    }
    return () => clearInterval(interval);
  }, [inningInfo]);

  const [buttonFlag, setButtonFlag] = useState(false);
  return (
    <S.PitchButton
      visible={visible}
      disabled={buttonFlag}
      onClick={() => {
        const action = pitch();
        dispatch({ type: action });
        if (action === 'HIT') {
          baseListDispatch({ type: action });
          setAniState(true);
        }
        handleButtonFlag(setButtonFlag);
      }}
    >
      Pitch
    </S.PitchButton>
  );
};

const pitch = () => {
  const pitchAction = ['STRIKE', 'BALL', 'STRIKE', 'BALL', 'HIT'];
  const randomNumber = Math.floor(Math.random() * 5);
  return pitchAction[randomNumber];
};

const handleButtonFlag = (setButtonFlag) => {
  setButtonFlag((prev) => !prev);
  setTimeout(() => {
    setButtonFlag((prev) => !prev);
  }, playDelayTime);
};

export default PitchButton;
