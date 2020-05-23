import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Div>
      <Ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </Ul>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 10px;
  height: 64px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 50%;
  li {
    a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: none;
      padding: 8px;
      font-size: 12px;
    }
  }
`;
