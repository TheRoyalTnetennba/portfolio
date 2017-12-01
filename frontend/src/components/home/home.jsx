import React, { Component } from 'react';
import Layout from '../layout/layout';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section id="about" className="f1 p50">
          <h1 className="fs20 ilb big-underlined">Graham Paye <h1 className="fs20 fwn ilb">- Software Developer in the San Francisco Bay Area</h1></h1>
          <div className="fb section">
            <div className="f1 mb30">
              <h1 className="fs46 mt0">Hi, I'm Graham Paye</h1>
              <h1 className="d-grey fwn pr40 fs20 mb30" >FULL-STACK DEVELOPMENT GENERALIST</h1>
              <p className="fs17 mr10 lh25 mb40 pr40 d-grey">I originally became interested in software development while working for a small home 
                remodeling company. There were a number of inefficiencies in the CRM we were using which 
                daily added several hours of extra data entry. Unable to find a solution, I taught myself Python, 
                and built one. I became fascinated by the efficient and near-permanent nature of the solutions that technology provides.</p>
              <a target="_blank" href="/images/Resume2017.pdf" className="button">View Resume</a>
            </div>
            <div className="f1 mb30">
              <img className="wp100" src="/images/me.png" />
            </div>
          </div>
        </section>
        <section id="projects" className="f1 p50">
          <h2 className="underlined">Projects</h2>
          <div className="fb pt50">
            <div className="f1 pr20">
              <div className="mh170">
                <img className="wp100" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1504232129/kitchenfoxscreens_jj8uig.png" />
              </div>
              <h2 className="fs20">KitchenFox</h2>
              <a className="small-button">View on GitHub</a>
            </div>
            <div className="f1 pl20 pr20">
              <div className="mh170">
                <img className="wp100" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1504232131/ieproductpage_gttibz.png" />
              </div>
              <h2 className="fs20">IndieExpo</h2>
              <a className="small-button">View on GitHub</a>
            </div>
            <div className="f1 pl20">
              <div className="mh170">
                <img className="wp100" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1504232128/cowboyBeatbox_rgenki.png" />
              </div>
              <h2 className="fs20">Cowboy Beatbox</h2>
              <a className="small-button">View on GitHub</a>
            </div>
          </div>
        </section>
        <section id="skills">
        </section>
      
      </Layout>
    );
  }
}

export default Footer