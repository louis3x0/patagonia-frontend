import React from 'react';
import hero_video from '../../assets/fire.mp4';

const MainVideo = () => {
  return (
    <div className="main-video">
      <video playsinline autoplay="true" muted loop>
        <source src={hero_video} type="video/mp4" />
      </video>
      <div className="content-video">
        <img
          src="https://eu.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw1e4f23b4/images/svg/StoneLocals-Logo.svg"
          alt="hero"
        />
        <div className="texts">
          <span>Rediscovering the soul of climbing.</span>
          <button className="films">Watch Film</button>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
