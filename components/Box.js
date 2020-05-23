import React from 'react';
import styled from 'styled-components';

const Box = ({ children }) => {
  return <BoxContainer>{children}</BoxContainer>;
};

export default Box;

const BoxContainer = styled.div`
  margin-bottom: 24px;
`;
