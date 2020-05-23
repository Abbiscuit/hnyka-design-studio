import React from 'react';
import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';
import { MainHeading } from '../../components/styles/fonts';

const About = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <MainHeading>Hnyka.</MainHeading>
        <p>華やかの造語</p>
      </Layout>
    </div>
  );
};

export default About;
