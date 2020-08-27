import React from 'react';

const Slide = (props) => {
  return props.data.map((data) => {
    return (
      <div className="slide-content">
        <img src={data.image_url} />
        <p className="slide-title">{data.category_title}</p>
      </div>
    );
  });
};

export default Slide;
