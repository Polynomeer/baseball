import { useContext, useEffect, useState } from 'react';
import { playDelayTime } from '@/Utils/const';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { GameContext } from '../Game';

const PitchButton = ({ inningInfo, dispatch }) => {
  const [visible, setVisible] = useState('visible');
  const { baseListDispatch } = useContext(GameContext);
  let interval;

  useEffect(() => {
    if (!inningInfo.isDefense) {
      setVisible('hidden');
      interval = setInterval(() => {
        dispatch({ type: pitch() });
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
        }
        handleButtonFlag(setButtonFlag);
      }}
    >
      Pitch
    </S.PitchButton>
  );
};

const pitch = () => {
  const pitchAction = ['HIT', 'HIT', 'HIT'];
  const randomNumber = Math.floor(Math.random() * 3);
  return pitchAction[randomNumber];
};

const handleButtonFlag = (setButtonFlag) => {
  setButtonFlag((prev) => !prev);
  setTimeout(() => {
    setButtonFlag((prev) => !prev);
  }, playDelayTime);
};

export default PitchButton;
