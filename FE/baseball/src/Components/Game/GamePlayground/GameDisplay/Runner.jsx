import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useState } from 'react';

const ToFirst = () => {
  const [img, setImg] = useState({
    name: 'runner',
    deg: 45,
  });

  const { name, deg } = img;

  const animationHandler = () => {
    setImg({
      name: 'runner2',
      deg: 0,
    });
  };
  return (
    <S.ToFirst onAnimationEnd={animationHandler} deg={deg}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToFirst>
  );
};
const ToSecond = () => {
  const [img, setImg] = useState({
    name: 'runner',
    deg: 45,
  });
  const { name, deg } = img;

  const animationHandler = () => {
    setImg({
      name: 'runner2',
      deg: 0,
    });
  };
  return (
    <S.ToSecond onAnimationEnd={animationHandler} deg={deg}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToSecond>
  );
};

const ToThird = () => {
  const [img, setImg] = useState({
    name: 'runner',
    deg: 45,
  });
  const { name, deg } = img;

  const animationHandler = () => {
    setImg({
      name: 'runner2',
      deg: 0,
    });
  };
  return (
    <S.ToThird onAnimationEnd={animationHandler} deg={deg}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToThird>
  );
};

const ToHome = () => {
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
    <S.ToHome onAnimationEnd={animationHandler} deg={deg} opacity={opacity}>
      <img src={`./asset/${name}.gif`} alt="runner" />
    </S.ToHome>
  );
};

const Runner = ({ type }) => {
  return {
    1: <ToFirst />,
    2: <ToSecond />,
    3: <ToThird />,
    4: <ToHome />,
  }[type];
};

export default Runner;
