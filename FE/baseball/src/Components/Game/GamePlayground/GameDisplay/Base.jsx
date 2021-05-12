import { GamePlayground as S } from '@/Components/Game/GameStyles';

const Base = ({ basePosition, isRunner }) => {
  return {
    first: <S.FirstBase {...{ isRunner }} />,
    second: <S.SecondBase {...{ isRunner }} />,
    third: <S.ThirdBase {...{ isRunner }} />,
  }[basePosition];
};

export default Base;
