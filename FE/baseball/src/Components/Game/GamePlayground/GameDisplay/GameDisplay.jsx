import GameDisplayBackground from '@/Components/Game/GamePlayground/GameDisplay/GameDisplayBackground';
import Base from './Base';
import { v4 as uuidv4 } from 'uuid';
import Runner from './Runner';
import HomeBase from './HomeBase';
import { GamePlayground as S } from '@/Components/Game/GameStyles';
import { useEffect, useReducer } from 'react';
import {
  baseRunner,
  baseStatement,
  gameDisplayTable,
  hitterAction,
  initialBaseList,
  initialBaseState,
  initialRunnerState,
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

const baseListReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case hitterAction.HIT: {
      const updateState = state.map((each) => {
        return { ...each, player: each.player, base: each.base + 1 };
      });
      return [
        {
          player: action.player,
          base: 1,
        },
        ...updateState,
      ];
    }

    case 'DOUBLE':
      return;

    default:
      break;
  }
};

const GameDisplay = () => {
  const [baseState, hitterActionDispatch] = useReducer(
    hitterReducer,
    initialBaseState
  );

  const [baseList, baseListDispatch] = useReducer(
    baseListReducer,
    initialBaseList
  );

  useEffect(() => {
    console.log(baseList);
  }, [baseList]);

  console.log(baseList.length);
  return (
    <S.GameDisplay>
      <GameDisplayBackground />
      <HitterButton {...{ hitterActionDispatch, baseListDispatch }} />
      <Player />
      {baseList.map((runner) => (
        <Runner type={runner.base} key={uuidv4()} />
      ))}
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
