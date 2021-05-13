import { createContext, useState, useEffect } from "react";
import GameHeader from "./GameHeader/GameHeader";
import GamePlayground from "./GamePlayground/GamePlayground";
import GamePlayLog from "./GamePlayLog/GamePlayLog";
import SquadBoard from "./SquadBoard/SquadBoard";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import { BACKGROUND_URL } from "@/Utils/const";
import getGameData from "@/Utils/getGameData";
import { Game as S } from "@/Components/Game/GameStyles";

const GameContext = createContext();

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

  useEffect(() => {
    getGameData("game", gameId, setGameData, setError);
    getGameData("squads", gameId, setSquads, setError);
    setDefenseTeam(teamName);
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
        teamName,
        gameData,
        squads,
        defenseTeam,
        setDefenseTeam,
        homeCurrentHitter,
        setHomeCurrentHitter,
        awayCurrentHitter,
        setAwayCurrentHitter,
        homePitchCount,
        setHomePitchCount,
        awayPitchCount,
        setAwayPitchCount,
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
        <ScoreBoard />
        <SquadBoard />
      </S.Game>
    </GameContext.Provider>
  );
};

export { Game, GameContext };
