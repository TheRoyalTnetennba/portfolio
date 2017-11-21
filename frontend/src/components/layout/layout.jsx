import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import './colors.css';
import './layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="main-wrapper" className="black white-b">
        <nav className="black-b yellow">
          <h1>Menu</h1>
          <h1>Follow Me</h1>
          <div className="social-buttons">
            <SocialIcon className="red-hover" url="https://www.grahampaye.com/" color="#AD5472" />
            <SocialIcon url="https://www.linkedin.com/in/graham-paye/" color="#AD5472" />
            <SocialIcon url="https://github.com/TheRoyalTnetennba" color="#AD5472" />
            <SocialIcon network="email" url="mailto:gpaye8@gmail.com" color="#AD5472" className="cp" />
          </div>
        </nav>

          {this.props.children}
      </main>

    );
  }
}

export default Layout;
