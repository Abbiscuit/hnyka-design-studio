import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <LinkItem>{name}</LinkItem>
    </Link>
  );
};

export default NavLink;

const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.black};
`;
