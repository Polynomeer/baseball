import { GamePlayground as S } from '@/Components/Game/GameStyles';

const FirstBase = () => {
  return;
};
const SecondBase = () => {
  return;
};
const ThirdBase = () => {
  return;
};

const Base = ({ basePosition, isRunner }) => {
  return {
    first: <S.FirstBase {...{ isRunner }} />,
    second: <S.SecondBase {...{ isRunner }} />,
    third: <S.ThirdBase {...{ isRunner }} />,
  }[basePosition];
};

export default Base;
