import React from 'react';
import './Hero.css';
import { Header } from 'semantic-ui-react' 

function Hero() {
  return (
    <div className="heroImage">
        <Header
          content='iCrowdTask'
          inverted
          style={{ paddingTop: '2em'}}
        />
    </div>
  );
}

export default Hero;
