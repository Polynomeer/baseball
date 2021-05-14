import { useReducer } from 'react';
import InningInfo from './InningInfo';
import PitchButton from './PitchButton';
import BallCountBoard from './BallCountBoard/BallCountBoard';
import { BACKGROUND_URL } from '@/Utils/const';
import { GamePlayground as S } from '@/Components/Game/GameStyles';

const reducer = (state, action) => {
  const initialBallState = {
    strike: 0,
    ball: 0,
    out: 0,
  };
  switch (action.type) {
    case 'STRIKE_OUT':
      // 로그 데이터 PUT
      return { ...state, ...initialBallState, out: state.out + 1 };
    case 'STRIKE':
      return { ...state, strike: state.strike + 1 };
    case 'FOUR_BALL':
    case 'HIT':
      // 추가로 1루타 액션 필요 & 로그 데이터 PUT
      return { ...state, ...initialBallState, out: state.out };
    case 'BALL':
      return { ...state, ball: state.ball + 1 };
    case 'THREE_OUT':
      // 이닝 정보 PUT
      // defenseTeam Switching
      let inningState = { ...state, ...initialBallState };
      if (state.inningCount === '초') {
        if (!state.isDefense) {
          inningState.inningCount = '말';
        }
      } else {
        if (!state.isDefense) {
          inningState.inning = state.inning + 1;
          inningState.inningCount = '초';
        }
      }
      inningState.isDefense = !state.isDefense;
      return { ...inningState };
    // case 'HIT':
    //   return { ...state, ...initialBallState, out: state.out };
    default:
      return { ...state, ...initialBallState };
  }
};

const GamePlayground = () => {
  const initialState = {
    strike: 2,
    ball: 0,
    out: 2,
    inning: 1,
    inningCount: '초',
    isDefense: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

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
