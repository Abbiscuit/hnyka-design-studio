import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Box from '../components/Box';

const Index = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <MainHeading>Next.jsが大好きなのさ</MainHeading>
        <Box>
          <Card
            title="Flower 2020"
            image="https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            date="2020/10/03"
            alt="Flower 2020"
          />
        </Box>
        <Box>
          <Card
            title="Flower 2020"
            image="https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            date="2020/10/03"
            alt="Flower 2020"
          />
        </Box>
        <Box>
          <Card
            title="Flower 2020"
            image="https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            date="2020/10/03"
            alt="Flower 2020"
          />
        </Box>
      </Layout>
    </>
  );
};

export default Index;

const MainHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.black};
  font-weight: normal;
`;
