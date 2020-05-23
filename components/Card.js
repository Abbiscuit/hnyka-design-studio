import React from 'react';
import styled from 'styled-components';

const Card = ({ image, title, date }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />

      <CardTitle>{title}</CardTitle>
      <CardComment>{`撮影日: ${date ? date : '不明'}`}</CardComment>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
  height: 215px;
  object-fit: cover;
  object-position: 100%;
`;

const CardTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

const CardComment = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;
