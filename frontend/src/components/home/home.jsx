import React, { Component } from 'react';
import Layout from '../layout/layout';
import './home.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section id="about" className="f1 p50">
          <h1 className="fs20 ilb big-underlined">Graham Paye <h1 className="fs20 fwn ilb">- Software Developer in the San Francisco Bay Area</h1></h1>
          <div className="fb pt30 section">
            <div className="f1 mb30">
              <h1 className="fs46 mt0">Hi, I'm Graham Paye</h1>
              <h1 className="d-grey fwn pr40 fs20 mb30" >FULL-STACK DEVELOPMENT GENERALIST</h1>
              <p className="fs17 mr10 lh25 mb40 pr40">I originally became interested in software development while working for a small home 
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
          <div className="fb section mt50">
            <div className="f1 pr20 mb50" id="kitchenfox">
              <div className="mh170">
                <img className="wp100" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1504232129/kitchenfoxscreens_jj8uig.png" />
              </div>
              <h2 className="fs20">KitchenFox</h2>
              <p className="mb30">A iOS/Android app built using Nodejs, MongoDB, Express, 
                and React-Native, enables the user to keep track of ingredient quantities 
                and receive relevant recipe suggestions.</p>
              <a className="small-button">View on GitHub</a>
            </div>
            <div className="f1 pl20 pr20 mb50" id="indieexpo">
              <div className="mh170">
                <img className="wp100" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1504232131/ieproductpage_gttibz.png" />
              </div>
              <h2 className="fs20">IndieExpo</h2>
              <p className="mb30">A single-page web application inspired by IndieGogo, built 
                using Ruby on Rails, React, Redux, PostgreSQL, and Go. Allows users to create, 
                view, and contribute to fund-raising campaigns.</p>
              <a className="small-button">View on GitHub</a>
            </div>
            <div className="f1 pl20 mb50" id="cowboybeatbox">
              <div className="mh170">
                <img className="wp100" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1504232128/cowboyBeatbox_rgenki.png" />
              </div>
              <h2 className="fs20">Cowboy Beatbox</h2>
              <p className="mb30">CowboyBeatBox is a browser-based beatboxing app made with 
                vanilla JavaScript and HTML, allowing users to create music and watch Spike 
                Spiegel dance to their selected tempo.</p>
              <a className="small-button">View on GitHub</a>
            </div>
          </div>
        </section>
        <section id="skills" className="f1 p50">
          <h2 className="underlined">Skills</h2>
          <div className="mt50">
            <div className="skill-row">
              <div className="skill-icon"><i className="devicon-amazonwebservices-original"></i><p>Amazon Web Services</p></div>
              <div className="skill-icon"><i className="devicon-android-plain"></i><p>Android</p></div>
              <div className="skill-icon"><i className="devicon-babel-plain"></i><p>Babel</p></div>
              <div className="skill-icon"><i className="devicon-bootstrap-plain"></i><p>Bootstrap</p></div>
              <div className="skill-icon"><i className="devicon-css3-plain"></i><p>CSS 3</p></div>
              <div className="skill-icon"><i className="devicon-django-plain"></i><p>Django</p></div>
              <div className="skill-icon"><i className="devicon-docker-plain"></i><p>Docker</p></div>
            </div>
            <div className="skill-row">
              <div className="skill-icon"><i className="devicon-express-original"></i><p>Express</p></div>
              <div className="skill-icon"><i className="devicon-gimp-plain"></i><p>Gimp</p></div>
              <div className="skill-icon"><i className="devicon-git-plain"></i><p>Git</p></div>
              <div className="skill-icon"><i className="devicon-go-plain"></i><p>Go</p></div>
              <div className="skill-icon"><i className="devicon-google-plain"></i><p>Google Cloud Platform</p></div>
              <div className="skill-icon"><i className="devicon-html5-plain"></i><p>HTML5</p></div>
              <div className="skill-icon"><i className="devicon-javascript-plain"></i><p>JavaScript</p></div>
            </div>
            <div className="skill-row">
              <div className="skill-icon"><i className="devicon-jquery-plain"></i><p>jQuery</p></div>
              <div className="skill-icon"><i className="devicon-linux-plain"></i><p>Linux</p></div>
              <div className="skill-icon"><i className="devicon-mongodb-plain"></i><p>MongoDB</p></div>
              <div className="skill-icon"><i className="devicon-mysql-plain"></i><p>MySQL</p></div>
              <div className="skill-icon"><i className="devicon-nginx-original"></i><p>NGINX</p></div>
              <div className="skill-icon"><i className="devicon-nodejs-plain"></i><p>Node.js</p></div>
              <div className="skill-icon"><i className="devicon-postgresql-plain"></i><p>PostgreSQL</p></div>
            </div>
            <div className="skill-row">
              <div className="skill-icon"><i className="devicon-python-plain"></i><p>Python</p></div>
              <div className="skill-icon"><i className="devicon-react-original"></i><p>React</p></div>
              <div className="skill-icon"><i className="devicon-rails-plain"></i><p>Ruby On Rails</p></div>
              <div className="skill-icon"><i className="devicon-ruby-plain"></i><p>Ruby</p></div>
              <div className="skill-icon"><i className="devicon-sass-original"></i><p>SASS</p></div>
              <div className="skill-icon"><i className="devicon-swift-plain"></i><p>Swift</p></div>
              <div className="skill-icon"><i className="devicon-webpack-plain"></i><p>Webpack</p></div>
            </div>
          </div>

        </section>
      
      </Layout>
    );
  }
}

export default Footer