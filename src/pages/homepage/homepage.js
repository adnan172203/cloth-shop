import React from 'react';
import './homepage-style.scss';
import Directory from '../../components/directory/directory';
import { HomePageContainer } from './homepage-styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
