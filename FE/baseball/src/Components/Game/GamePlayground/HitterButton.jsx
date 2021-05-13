import { useState } from 'react';
import styled from 'styled-components';

const Hitter = ({ hitterActionDispatch, baseListDispatch, type }) => {
  const [player, setPlayer] = useState(1);

  const handleClickHitter = (type) => {
    console.log(type);
    hitterActionDispatch({ type: type });
    baseListDispatch({ type: type, player: player });
    setPlayer(player + 1);
  };

  return (
    <HitterStyle onClick={() => handleClickHitter(type)}>{type}</HitterStyle>
  );
};

const HitterButton = ({
  hitterActionDispatch,

  baseListDispatch,
}) => {
  return (
    <HitterButtonStyle>
      <Hitter {...{ hitterActionDispatch, baseListDispatch }} type={`HIT`} />
      <Hitter {...{ hitterActionDispatch, baseListDispatch }} type={`DOUBLE`} />
      <Hitter {...{ hitterActionDispatch, baseListDispatch }} type={`TRIPLE`} />
      <Hitter {...{ hitterActionDispatch, baseListDispatch }} type={`HR`} />
      <Hitter {...{ hitterActionDispatch, baseListDispatch }} type={`B4`} />
    </HitterButtonStyle>
  );
};

export default HitterButton;

const HitterStyle = styled.button`
  position: relative;
  width: 100px;
  height: 100px;
  border: none;
  cursor: pointer;
  z-index: 9999;
  top: 100px;
  left: 900px;
`;

const HitterButtonStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
