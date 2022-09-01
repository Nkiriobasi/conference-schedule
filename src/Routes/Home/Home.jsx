import React from 'react';
import { Hero, Navigation, Subscription } from '../../container';


const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Subscription />
      </main>
    </>
  );
}

export default Home;