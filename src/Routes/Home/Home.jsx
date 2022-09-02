import React from 'react';
import { About, Coc, Hero, Navigation, Schedule, Subscription } from '../../container';


const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Subscription />
        <About />
        <Schedule />
        <Coc />
      </main>
    </>
  );
}

export default Home;