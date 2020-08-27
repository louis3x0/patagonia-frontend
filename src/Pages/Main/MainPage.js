import React, { useEffect, useState } from 'react';
const MainPage = () => {
  return (
    <section>
      <div className="content">
        <span className="t-shirt">Can a T-shirt help stop climate change?</span>
        <p className="farming">
          No. But farming could. This is a test to change the way we grow our
          clothes.
        </p>
        <button className="learn-m">Learn More</button>
      </div>
      <svg
        className="icon-chevron-down"
        viewBox="0 0 17 11"
        aria-labelledby="icon--chevron-down-desc icon--chevron-down-title"
        id="icon--chevron-down"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="icon--chevron-down-title">chevron down</title>
        <desc id="icon--chevron-down-desc">chevron down</desc>
        <path d="M10.6 8.9l5.7-5.7c.4-.4.4-1 0-1.4L14.9.4c-.4-.4-1-.4-1.4 0l-5 4.9-5-4.9c-.4-.4-1-.4-1.4 0L.7 1.8c-.4.4-.4 1 0 1.4l7.1 7.1c.4.4 1 .4 1.4 0l1.4-1.4z"></path>
      </svg>
    </section>
  );
};

export default MainPage;
