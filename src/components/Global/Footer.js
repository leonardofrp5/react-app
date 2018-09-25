import React, { Component } from 'react';
import logo_facebook from './images/facebook.png';
import logo_linkein from './images/linkedin.png';
import logo_git from './images/github-logo.png';
import logo_twitter from './images/twitter.png';
import logo_instagram from './images/instagram.png';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Copyright">
          <span>Copyright -- Leonardo Romero Perez</span>
        </div>
        <div className="LogosNetwors">
          <img src={logo_facebook} alt="logo_facebook" />
          <img src={logo_linkein} alt="logo_linkein" />
          <img src={logo_git} alt="logo_git" />
          <img src={logo_twitter} alt="logo_twitter" />
          <img src={logo_instagram} alt="logo_instagram" />
        </div>
      </div>
    );
  }
}

export default Footer;
