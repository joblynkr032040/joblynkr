// pages/HomePage.jsx
import React from 'react';
import HeroSection from '../HeroSection';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import StepThree from '../steps/StepThree';
import CardBoard from '../CardBoard';
import BlueBox from '../BlueBox/BlueBox';
import Rating from '../Rating';
import ReviewCardContainer from '../ReviewCardContainer';
import FaqSection from '../FaqSection';
import FooterBlock from '../FooterBlock';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StepOne />
      <StepTwo />
      <StepThree />
      <CardBoard />
      <BlueBox />
      <Rating />
      <ReviewCardContainer />
      <FaqSection />
      <FooterBlock/>
    </>
  );
};

export default HomePage;
