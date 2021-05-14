import { createContext, useState, useEffect, useReducer } from 'react';
import GameHeader from './GameHeader/GameHeader';
import GamePlayground from './GamePlayground/GamePlayground';
import GamePlayLog from './GamePlayLog/GamePlayLog';
import SquadBoard from './SquadBoard/SquadBoard';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import { BACKGROUND_URL, hitterAction, initialBaseList } from '@/Utils/const';
import getGameData from '@/Utils/getGameData';
import { Game as S } from '@/Components/Game/GameStyles';
import GameDisplay from './GamePlayground/GameDisplay/GameDisplay';
import { v4 as uuidv4 } from 'uuid';
import useFetch from '@/Utils/useFetch';

const GameContext = createContext();

const baseListReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case hitterAction.HIT: {
      const updateState = state.map((each) => {
        return { ...each, player: each.player, base: each.base + 1 };
      });
      return [
        {
          player: uuidv4(),
          base: 1,
        },
        ...updateState,
      ];
    }
    case 'SCORE': {
      const updateState = state.filter((each) => {
        return each.base !== 4;
      });
      return [...updateState];
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return [...state];
  }
};

const Game = ({
  location: {
    state: { gameId, teamName },
  },
}) => {
  const [gameData, setGameData] = useState(null);

  const [squads, setSquads] = useState(null);
  const [defenseTeam, setDefenseTeam] = useState(null);
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);
  const [homeCurrentHitter, setHomeCurrentHitter] = useState(null);
  const [awayCurrentHitter, setAwayCurrentHitter] = useState(null);
  const [homePitchCount, setHomePitchCount] = useState(0);
  const [awayPitchCount, setAwayPitchCount] = useState(0);
  const [error, setError] = useState(null);
  const [aniState, setAniState] = useState(true);
  const [baseList, baseListDispatch] = useReducer(
    baseListReducer,
    initialBaseList
  );
  const gameScoreData = useFetch(
    `http://13.209.36.131:8080/games/${gameId}/scores`
  );

  const [totalScore, setTotalScore] = useState({
    home: 0,
    away: 0,
  });

  useEffect(() => {
    getGameData('game', gameId, setGameData, setError);
    getGameData('squads', gameId, setSquads, setError);
    setHomeTeam(gameData && gameData.home.teamName);
    setAwayTeam(gameData && gameData.away.teamName);
    setDefenseTeam(homeTeam);

    if (gameData) {
      // 초기 렌더링 시에 유저가 셀렉한 팀을 토대로 데이터 세팅
      setHomeCurrentHitter(gameData.home.players[0]);
      setAwayCurrentHitter(gameData.away.players[0]);
    }
  }, []);

  if (error || !gameData || !squads) return null;
  return (
    <GameContext.Provider
      value={{
        gameId,
        teamName,
        gameData,
        squads,
        defenseTeam,
        awayTeam,
        setDefenseTeam,
        homeCurrentHitter,
        setHomeCurrentHitter,
        awayCurrentHitter,
        setAwayCurrentHitter,
        homePitchCount,
        setHomePitchCount,
        awayPitchCount,
        setAwayPitchCount,
        baseList,
        baseListDispatch,
        aniState,
        setAniState,
        gameScoreData,
        totalScore,
        setTotalScore,
      }}
    >
      <S.Background src={BACKGROUND_URL} />
      <S.Game>
        <S.GameLeftSection>
          <GameHeader />
          <GamePlayground />
        </S.GameLeftSection>
        <S.GameRightSection>
          <GamePlayLog />
        </S.GameRightSection>
        <GameDisplay />
        <ScoreBoard />
        <SquadBoard />
      </S.Game>
    </GameContext.Provider>
  );
};

export { Game, GameContext };
