import { useEffect, useReducer } from 'react';
import styled from 'styled-components';

const Hitter = ({ hitterActionDispatch, type }) => {
  const handleClickHitter = (type) => {
    console.log(type);
    hitterActionDispatch({ type: type });
  };

  return (
    <HitterStyle onClick={() => handleClickHitter(type)}>{type}</HitterStyle>
  );
};

export default Hitter;

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
