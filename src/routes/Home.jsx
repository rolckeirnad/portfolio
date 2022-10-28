import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/1.png';

function Home() {
  return (
    <div className="col bg-secondary container px-4 px-xl-5 h-100 overflow-auto">
      <div className="row flex-lg-row-reverse flex-column align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={image} alt="profile" className="d-block mx-lg-auto img-fluid mw-100" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 px-1">Daniel Gallardo</h1>
          <h2 className="display-6 lh-1 px-1">Front End Jr. Developer</h2>
          <p className="lead">
            My name is Daniel Gallardo and I&apos;m learning Web Development.

            Previously worked as an electrician mechanic and electronics technician.

            I&apos;m interested in programming, electronics and embedded devices. I&apos;ve
            worked with Arduino and Metro pyboard w/MicroPython.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4"><Link to="portfolio" className="nav-link text-white">Portfolio</Link></button>
            <button type="button" className="btn btn-primary btn-lg px-4"><Link to="resume" className="nav-link text-white">Resume</Link></button>
          </div>
        </div>
      </div>
      <div>Learned Technologies</div>
    </div>
  );
}

export default Home;
