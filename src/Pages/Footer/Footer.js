import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <ul className="list">
          <div className="content-footer">
            <span>Subscribe</span>
            <p>
              Sign up for exclusive offers, original stories, activism
              awareness, events and more.
            </p>
            <div className="button-wrap">
              <input placeholder="Email Address"></input>
              <button>Sign Me Up</button>
            </div>
          </div>
        </ul>
        <div className="help">
          <span>Get Help</span>
          <div className="btn-wrap">
            <button className="buttons">Help Conter</button>
            <button className="buttons">Order Status</button>
            <button className="buttons">Returns and Repairs</button>
            <button className="buttons">Login</button>
          </div>
        </div>
        <div className="information">
          <span>Information</span>
          <div className="text">
            <ul>
              <li>Patagonia Action Works</li>
              <li>Privacy Notice</li>
              <li>Terms and Conditions of Sale</li>
              <li>Cookie Preferences</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
            <ul>
              <li>Pro Community</li>
              <li>1% For The Planet</li>
              <li>Corporate Sales</li>
              <li>Worn Wear</li>
              <li>Find a Store</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-wrap">
        <p>© 2020 Patagonia, Inc. All Rights Reserved</p>
        <p>English</p>
      </div>
    </footer>
  );
};

export default Footer;
