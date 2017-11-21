import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import './colors.css';
import './atomics.css';
import './layout.css'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="main-wrapper" className="black white-b">
        <nav>
          <a className="pill">Menu</a>
          <a>About</a>
          <a>Projects</a>
          <a>Apps</a>
          <a>Games</a>
          <a>Skills</a>
          <a>Get In Touch</a>
          <div className="social-buttons">
            <SocialIcon className="red-hover" url="https://www.grahampaye.com/" color="#eb1478" />
            <SocialIcon url="https://www.linkedin.com/in/graham-paye/" color="#eb1478" />
            <SocialIcon url="https://github.com/TheRoyalTnetennba" color="#eb1478" />
            <SocialIcon network="email" url="mailto:gpaye8@gmail.com" color="#eb1478" className="cp" />
          </div>
        </nav>

          {this.props.children}
      </main>

    );
  }
}

export default Layout;
