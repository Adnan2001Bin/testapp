import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import BookTrip from '../components/BookTrip';
import Testimonials from '../components/Testimonials';
import Logos from '../components/Logos';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Subscribe />
    </>
  );
};

export default Home;
