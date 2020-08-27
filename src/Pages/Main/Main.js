import React from 'react';
import Header from '../Header/Header';
import MainPage from './MainPage';
import SliderCarousel from './SliderCarousel';
import MainVideo from '../Main/MainVideo';

const Main = () => {
  return (
    <>
      <Header />
      <MainPage />
      <SliderCarousel />
      <MainVideo />
    </>
  );
};

export default Main;
