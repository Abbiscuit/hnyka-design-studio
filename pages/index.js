import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Box from '../components/Box';

import { MainHeading } from '../components/styles/fonts';

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
