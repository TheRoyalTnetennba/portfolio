import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Games from './games';
import Contact from './contact';
import './colors.css';
import './atomics.css';
import './layout.css'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: false,
      apps: false,
      games: false,
      contact: false,
    };
  }

  arrow(el, active) {
    return active ? (<i class="fa fa-angle-up ml10" aria-hidden="true"/>) : (<i class="fa fa-angle-down ml10" aria-hidden="true"/>)
  }

  toggle(el) {
    console.log(el)
    this.setState({ [el]: !this.state[el] });
  }

  render() {
    return (
      <main id="main-wrapper" className="black white-b fb">
        <nav className="f1">
          <Link to="/" className="pill">Menu</Link>
          <Link to="/#about">About</Link>
          <a onClick={() => this.toggle('projects')}>Projects{this.arrow('projects', this.state.projects)}</a>
          {false ? <a onClick={() => this.toggle('apps')}>Apps{this.arrow('apps', this.state.apps)}</a> : ''}
          {false ? <a onClick={() => this.toggle('games')}>Games{this.arrow('games', this.state.games)}</a> : ''}
          {this.state.games ? <Games /> : ''}
          <Link to="/#skills">Skills</Link>
          <a onClick={() => this.toggle('contact')}>Get In Touch{this.arrow('contact', this.state.contact)}</a>
          {this.state.contact ? <Contact /> : ''}
          <div className="social-buttons fb jcsa">
            <a className="social" target="_blank" href="https://github.com/TheRoyalTnetennba"><i className="fa fa-github" aria-hidden="true" /></a>
            <a className="social" target="_blank" href="https://www.linkedin.com/in/graham-paye/"><i className="fa fa-linkedin" aria-hidden="true" /></a>
            <a className="social" target="_blank" href="https://angel.co/graham-paye"><i className="fa fa-angellist" aria-hidden="true" /></a>
          </div>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </main>

    );
  }
}

export default withRouter(Layout);
