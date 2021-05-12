import styled from 'styled-components';

const Hitter = ({ hitterActionDispatch, runnerDispatch, type }) => {
  const handleClickHitter = (type) => {
    console.log(type);
    hitterActionDispatch({ type: type });
    runnerDispatch({ type: type });
  };

  return (
    <HitterStyle onClick={() => handleClickHitter(type)}>{type}</HitterStyle>
  );
};

const HitterButton = ({ hitterActionDispatch, runnerDispatch }) => {
  return (
    <HitterButtonStyle>
      <Hitter {...{ hitterActionDispatch, runnerDispatch }} type={`HIT`} />
      <Hitter {...{ hitterActionDispatch, runnerDispatch }} type={`DOUBLE`} />
      <Hitter {...{ hitterActionDispatch, runnerDispatch }} type={`TRIPLE`} />
      <Hitter {...{ hitterActionDispatch, runnerDispatch }} type={`HR`} />
      <Hitter {...{ hitterActionDispatch, runnerDispatch }} type={`B4`} />
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
