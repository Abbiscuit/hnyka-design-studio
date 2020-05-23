import React from 'react';
import styled from 'styled-components';

const Layout = props => {
  return <Container>{props.children}</Container>;
};

export default Layout;

const Container = styled.div`
  padding: 0 24px;
`;
