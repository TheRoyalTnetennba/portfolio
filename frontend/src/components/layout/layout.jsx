import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import Games from './games';
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
    this.setState({ [el]: !this.state[el] });
  }

  scrollTo(id) {
    document.getElementById(id).scrollIntoView();
  }

  contact() {
    const contactInfo = (
      <ul>
        <li><i class="fa fa-phone pink mr20" aria-hidden="true"/>586-484-0189</li>
        <li><i class="fa fa-envelope pink mr20" aria-hidden="true"/>gpaye8@gmail.com</li>
        <li><i class="fa fa-map-marker pink mr20" aria-hidden="true"/>San Francisco, CA</li>
      </ul>
    );
    return this.state.contact ? contactInfo : '';
  }

  projects() {
    const projectLinks = (
      <ul>
        <li onClick={() => this.scrollTo('kitchenfox')} className="sublink">KitchenFox</li>
        <li onClick={() => this.scrollTo('indieexpo')} className="sublink">IndieExpo</li>
        <li onClick={() => this.scrollTo('cowboybeatbox')} className="sublink">Cowboy Beatbox</li>
      </ul>
    );
    return this.state.projects ? projectLinks : '';
  }

  render() {
    return (
      <main id="main-wrapper" className="black white-b fb">
        <nav className="f1">
          <a className="mt75" onClick={() => this.scrollTo('about')}>About</a>
          <a onClick={() => this.toggle('projects')}>Projects{this.arrow('projects', this.state.projects)}</a>
          {this.projects()}
          {false ? <a onClick={() => this.toggle('apps')}>Apps{this.arrow('apps', this.state.apps)}</a> : ''}
          {false ? <a onClick={() => this.toggle('games')}>Games{this.arrow('games', this.state.games)}</a> : ''}
          {this.state.games ? <Games /> : ''}
          <a onClick={() => this.scrollTo('skills')}>Skills</a>
          <a onClick={() => this.toggle('contact')}>Get In Touch{this.arrow('contact', this.state.contact)}</a>
          {this.contact()}
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
