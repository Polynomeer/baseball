import GameDisplayBackground from '@/Components/Game/GamePlayground/GameDisplay/GameDisplayBackground';
import Base from './Base';

import Runner from './Runner';
import HomeBase from './HomeBase';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useEffect, useReducer } from 'react';
import {
  baseRunner,
  baseStatement,
  gameDisplayTable,
  hitterAction,
  initialBaseState,
  runner,
} from '@/Utils/const';
import Player from './Player';
import HitterButton from '../HitterButton';

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
    case hitterAction.B4:
      return {
        ...state,
        first: {
          ...state.first,
          isRunner: gameDisplayTable.B4[currentBaseState].base[0],
        },
        second: {
          ...state.second,
          isRunner: gameDisplayTable.B4[currentBaseState].base[1],
        },
        third: {
          ...state.third,
          isRunner: gameDisplayTable.B4[currentBaseState].base[2],
        },
      };
    default:
      throw new Error();
  }
};

const runnerReducer = (state, action) => {
  switch (action.type) {
    case hitterAction.HIT:
      return ([state[0], state[1], state[2]] = [
        { player: 'new', isRunner: true },
        state[0],
        state[1],
      ]);
    case hitterAction.DOUBLE:
      return;
    case hitterAction.TRIPLE:
      return;
    case hitterAction.HR:
      return;
    case hitterAction.B4:
      return;
    default:
      break;
  }
};
const hitterImgReducer = (state, action) => {
  switch (action.type) {
    case 'HITTER':
      return (state = 'HITTER');
    case 'RUNNER':
      return (state = 'RUNNER');
    default:
      break;
  }
};

const GameDisplay = () => {
  const [baseState, hitterActionDispatch] = useReducer(
    hitterReducer,
    initialBaseState
  );

  const [runnerState, runnerDispatch] = useReducer(
    runnerReducer,
    baseStatement
  );
  const [hitterImg, hitterImgDispatch] = useReducer(
    hitterImgReducer,
    'DEFAULT'
  );

  console.log(runnerState);
  useEffect(() => {}, [runnerState]);

  return (
    <S.GameDisplay>
      <GameDisplayBackground />
      <HitterButton {...{ hitterActionDispatch, runnerDispatch }} />
      <Player />

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
      {/* <HomeBase isHitter={runnerState[0].base} /> */}
    </S.GameDisplay>
  );
};

export default GameDisplay;
