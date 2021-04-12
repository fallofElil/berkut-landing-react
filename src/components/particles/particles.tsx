import React, { FC } from 'react';
import TSParticles, { Main, Container } from 'react-tsparticles'
import particlesOptions from '../../particles.options'

const Particles: FC = () => {
  const particlesInit = (main: Main) => {
    console.log('main:', main);
  };

  const particlesLoaded = (container: Container) => {
    console.log('container:', container);
  }


  return (
    <div>
      <TSParticles
        id="tsparticles"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
}

export default Particles;
