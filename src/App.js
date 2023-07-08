import React, { useState, useEffect }  from 'react';
// components
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Loader from './components/Loader/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the delay as needed
  }, []);

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Banner />
          <Nav />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;


