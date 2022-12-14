import React from 'react';

import Header from '../partials/Header';
import HeaderCustom from '../partials/HeaderCustom';
import HeroHome from '../partials/HeroHome';
import HeroCustom from '../partials/HeroCustom';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/* <HeaderCustom /> */}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroCustom />
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;