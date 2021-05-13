import { useEffect, useState } from 'react';
import MatchBox from './MatchBox/MatchBox';
import { MatchInfo as S } from '@/Components/Home/HomeStyles';
import { v4 as uuidv4 } from 'uuid';
import { getAPI } from '@/Utils/API';

const MatchInfoBody = () => {
  const [matchInfoData, setMatchInfoData] = useState(null);

  useEffect(() => {
    getAPI.main().then((res) => {
      if (res && res.data) {
        setMatchInfoData(res.data);
      }
    });
  }, []);

  return matchInfoData ? (
    <S.ScrollMask>
      <S.MatchInfoBody>
        {matchInfoData.games.map((match, idx) => (
          <MatchBox key={uuidv4()} gameId={match.gameId} {...{ match, idx }} />
        ))}
      </S.MatchInfoBody>
    </S.ScrollMask>
  ) : null;
};

export default MatchInfoBody;
