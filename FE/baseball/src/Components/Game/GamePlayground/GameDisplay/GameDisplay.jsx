import GameDisplayBackground from '@/Components/Game/GamePlayground/GameDisplay/GameDisplayBackground';
import Base from './Base';
import Hitter from '../Hitter';
import Runner from './Runner';
import HomeBase from './HomeBase';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useEffect, useReducer } from 'react';
import { baseRunner, gameDisplayTable } from '@/Utils/const';

const hitterAction = {
  HIT: 'HIT',
  DOUBLE: 'DOUBLE',
  TRIPLE: 'TRIPLE',
  HR: 'HR',
};

const initialBaseState = {
  first: {
    position: `first`,
    runner: 0,
    isRunner: false,
  },
  second: {
    position: `second`,
    runner: 0,
    isRunner: false,
  },
  third: {
    position: `third`,
    runner: 0,
    isRunner: false,
  },
};

// 현재 출루 상황
const checkBaseState = (state) => {
  const currentState = [
    state.first.isRunner,
    state.second.isRunner,
    state.third.isRunner,
  ];
  let currentBase = '';
  for (const base in baseRunner) {
    if (JSON.stringify(baseRunner[base]) === JSON.stringify(currentState)) {
      currentBase = base;
    }
  }
  return currentBase;
};

const hitterReducer = (state, action) => {
  const currentBaseState = checkBaseState(state);
  console.log(currentBaseState);
  console.log(gameDisplayTable.H[currentBaseState]);

  switch (action.type) {
    case hitterAction.HIT:
      return {
        ...state,
        first: {
          ...state.first,
          isRunner: gameDisplayTable.H[currentBaseState].base[0],
        },
        second: {
          ...state.second,
          isRunner: gameDisplayTable.H[currentBaseState].base[1],
        },
        third: {
          ...state.third,
          isRunner: gameDisplayTable.H[currentBaseState].base[2],
        },
      };
    case hitterAction.DOUBLE:
      return {
        ...state,
        first: {
          ...state.first,
          isRunner: gameDisplayTable.D[currentBaseState].base[0],
        },
        second: {
          ...state.second,
          isRunner: gameDisplayTable.D[currentBaseState].base[1],
        },
        third: {
          ...state.third,
          isRunner: gameDisplayTable.D[currentBaseState].base[2],
        },
      };
    case hitterAction.TRIPLE:
      return {
        ...state,
        first: {
          ...state.first,
          isRunner: gameDisplayTable.T[currentBaseState].base[0],
        },
        second: {
          ...state.second,
          isRunner: gameDisplayTable.T[currentBaseState].base[1],
        },
        third: {
          ...state.third,
          isRunner: gameDisplayTable.T[currentBaseState].base[2],
        },
      };
    case hitterAction.HR:
      return {
        ...state,
        first: {
          ...state.first,
          isRunner: gameDisplayTable.HR[currentBaseState].base[0],
        },
        second: {
          ...state.second,
          isRunner: gameDisplayTable.HR[currentBaseState].base[1],
        },
        third: {
          ...state.third,
          isRunner: gameDisplayTable.HR[currentBaseState].base[2],
        },
      };
    default:
      throw new Error();
  }
};

const GameDisplay = () => {
  const [baseState, hitterActionDispatch] = useReducer(
    hitterReducer,
    initialBaseState
  );
  console.log(baseState);

  useEffect(() => {
    console.log('출루주자 베이스 컬러 세팅!');
  }, [baseState]);

  return (
    <S.GameDisplay>
      <GameDisplayBackground />
      <Hitter {...{ hitterActionDispatch }} type={`HIT`} />
      <Hitter {...{ hitterActionDispatch }} type={`DOUBLE`} />
      <Hitter {...{ hitterActionDispatch }} type={`TRIPLE`} />
      <Hitter {...{ hitterActionDispatch }} type={`HR`} />
      {/* <Runner /> */}
      <Base
        isRunner={baseState.first.isRunner}
        basePosition={baseState.first.position}
      />
      <Base
        isRunner={baseState.second.isRunner}
        basePosition={baseState.second.position}
      />
      <Base
        isRunner={baseState.third.isRunner}
        basePosition={baseState.third.position}
      />
      {/* <HomeBase /> */}
    </S.GameDisplay>
  );
};

export default GameDisplay;
