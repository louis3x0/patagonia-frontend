import React from 'react';
import Header from '../Header/Header';
import MainPage from './MainPage';
import SliderCarousel from './SliderCarousel';
import MainVideo from '../Main/MainVideo';
import Footer from '../Footer/Footer';
const Main = () => {
  return (
    <>
      <Header />
      <MainPage />
      <SliderCarousel />
      <MainVideo />
      <Footer />
    </>
  );
};

export default Main;
