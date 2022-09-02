import React from 'react';
import { About, Hero, Navigation, Subscription } from '../../container';


const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Subscription />
        <About />
      </main>
    </>
  );
}

export default Home;