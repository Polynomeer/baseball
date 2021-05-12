import { GamePlayground as S } from '@/Components/Game/GameStyles';

const HomeBase = ({ isHitter }) => {
  return (
    <S.HomeBase {...{ isHitter }}>
      <img src="./asset/runner3.gif" alt="runner3" />
    </S.HomeBase>
  );
};

export default HomeBase;
