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
          <h1 className="fs20 ilb underlined">Graham Paye <h1 className="fs20 fwn ilb">- Software Developer in the San Francisco Bay Area</h1></h1>
          <div className="fb">
            <div className="f1">
              <h1 className="fs46">Hi, I'm Graham Paye</h1>
              <h1 className="d-grey" >FULL-STACK DEVELOPMENT GENERALIST</h1>
              <p className="fs20 mr10 lh25">I originally became interested in software development while working for a small home 
                remodeling company. There were a number of inefficiencies in the CRM we were using which 
                daily added several hours of extra data entry. Unable to find a solution, I taught myself Python, 
                and built one. I became fascinated by the efficient and near-permanent nature of the solutions that technology provides.</p>
              <a className="button">View Resume</a>
            </div>
            <div className="f1">
              <img className="wp100" src="/images/me.png" />

            </div>
          </div>
        </section>
        <section id="projects">
        </section>
        <section id="skills">
        </section>
      
      </Layout>
    );
  }
}

export default Footer