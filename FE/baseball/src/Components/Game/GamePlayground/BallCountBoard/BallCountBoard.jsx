import BallJudgement from "./BallJudgement";
import BallCount from "./BallCount";
import { playDelayTime } from "@/Utils/const";
import { GamePlayground as S } from "@/Components/Game/GameStyles";
import * as CS from "@/Styles/CommonStyles";

const BallCountBoard = ({ ballCount, dispatch }) => {
  isStrikeOut(ballCount, dispatch);
  isFourBall(ballCount, dispatch);
  isThreeOut(ballCount, dispatch);
  return (
    <S.BallCountBoard.BallCountBoard>
      <CS.BOX.FLEX_ROW_CENTER_BOX>
        <BallJudgement type={"S"} />
        {sortBall("STRIKE", ballCount)}
      </CS.BOX.FLEX_ROW_CENTER_BOX>
      <CS.BOX.FLEX_ROW_CENTER_BOX>
        <BallJudgement type={"B"} />
        {sortBall("BALL", ballCount)}
      </CS.BOX.FLEX_ROW_CENTER_BOX>
      <CS.BOX.FLEX_ROW_CENTER_BOX>
        <BallJudgement type={"O"} />
        {sortBall("OUT", ballCount)}
      </CS.BOX.FLEX_ROW_CENTER_BOX>
    </S.BallCountBoard.BallCountBoard>
  );
};

const sortBall = (type, ballCount) => {
  let sortedBall = [];
  let ballCountLength;
  if (type === "STRIKE") {
    ballCountLength = ballCount.strike;
  } else if (type === "BALL") {
    ballCountLength = ballCount.ball;
  } else {
    ballCountLength = ballCount.out;
  }

  for (let i = 0; i < ballCountLength; i++) {
    sortedBall.push(<BallCount key={i} type={type} />);
  }
  return sortedBall;
};

const isStrikeOut = (ballCount, dispatch) => {
  if (ballCount.strike === 3) {
    setTimeout(() => {
      dispatch({ type: "STRIKE_OUT" });
    }, playDelayTime);
  }
};

const isFourBall = (ballCount, dispatch) => {
  if (ballCount.ball === 4) {
    setTimeout(() => {
      dispatch({ type: "FOUR_BALL" });
    }, playDelayTime);
  }
};

const isThreeOut = (ballCount, dispatch) => {
  if (ballCount.out === 3) {
    setTimeout(() => {
      dispatch({ type: "THREE_OUT" });
    }, playDelayTime);
  }
};

export default BallCountBoard;
