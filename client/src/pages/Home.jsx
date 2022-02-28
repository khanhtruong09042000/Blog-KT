import Navbar from '../components/Navbar';
import Slide from '../components/Slide';
import Title from '../components/Title';
import Girl from '../components/Girl'
import Letter from '../components/Letter';
import Footer from '../components/Footer';
import React from 'react';

const Home = () => {

  return (
    <div>
      <Title />
      <Navbar />
      <Slide />
      <Girl />
      <Letter />
      <Footer />
    </div>
  )
};

export default Home;
