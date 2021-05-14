import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useState } from 'react';

const ToFirst = ({ aniState }) => {
  const [img, setImg] = useState({
    name: aniState ? 'runner' : 'runner2',
    deg: aniState ? 45 : 0,
  });

  const { name, deg } = img;

  const animationHandler = () => {
    setImg({
      name: 'runner2',
      deg: 0,
    });
  };

  return (
    <S.ToFirst onAnimationEnd={animationHandler} {...{ deg, aniState }}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToFirst>
  );
};
const ToSecond = ({ aniState }) => {
  const [img, setImg] = useState({
    name: aniState ? 'runner' : 'runner2',
    deg: aniState ? 45 : 0,
  });
  const { name, deg } = img;

  const animationHandler = () => {
    setImg({
      name: 'runner2',
      deg: 0,
    });
  };

  return (
    <S.ToSecond onAnimationEnd={animationHandler} {...{ deg, aniState }}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToSecond>
  );
};

const ToThird = ({ aniState }) => {
  const [img, setImg] = useState({
    name: aniState ? 'runner' : 'runner2',
    deg: aniState ? 45 : 0,
  });
  const { name, deg } = img;

  const animationHandler = () => {
    setImg({
      name: 'runner2',
      deg: 0,
    });
  };

  return (
    <S.ToThird onAnimationEnd={animationHandler} {...{ deg, aniState }}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToThird>
  );
};

const ToHome = ({ aniState }) => {
  const [img, setImg] = useState({
    name: 'runner',
    deg: -45,
    opacity: 1,
  });
  const { name, deg, opacity } = img;

  const animationHandler = () => {
    setImg({
      ...img,
      opacity: 0,
    });
  };
  return (
    <S.ToHome onAnimationEnd={animationHandler} {...{ deg, opacity }}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToHome>
  );
};

const Runner = ({ type, aniState }) => {
  return {
    1: <ToFirst {...{ aniState }} />,
    2: <ToSecond {...{ aniState }} />,
    3: <ToThird {...{ aniState }} />,
    4: <ToHome {...{ aniState }} />,
  }[type];
};

export default Runner;
