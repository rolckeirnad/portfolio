import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/cartoon.png';

function Home() {
  return (
    <div className="col bg-secondary container px-4 px-xl-5 h-100 overflow-auto">
      <div className="row flex-lg-row-reverse flex-column align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={image} alt="profile" className="d-block mx-lg-auto img-fluid mw-100" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 px-1">Daniel Gallardo</h1>
          <h2 className="display-6 lh-1 px-1">Jr. Frontend Developer</h2>
          <p className="fs-4">
            I&apos;m an autodidact person who likes to solve problems. Currently, I&apos;m focused
            on kick-starting a career in web development
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4"><Link to="portfolio" className="nav-link text-white">Portfolio</Link></button>
            <button type="button" className="btn btn-primary btn-lg px-4"><Link to="resume" className="nav-link text-white">Resume</Link></button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-1">
        <div>
          <h2 className="display-6 fw-bold lh1 px-1">About me</h2>
          <p className="styled-links fs-4 px-4">
            My name is Daniel and I started this journey just before pandemic.
            I applied for a scholarship at a recognized bootcamp, and although I didn&apos;t get
            it, I started learning by myself watching videos on YouTube during my free time.
            During pandemic I had temporarily home office work, so I used the time saved from my
            commutes to continue learning.

            With more free time, I started with
            {' '}
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
            {' '}
            course and learnt HTML, CSS and JavaScript.

            Currently I&apos;m taking a refresher and following a learning path from
            {' '}
            <a href="https://www.theodinproject.com/">
              The Odin
              Project.
            </a>

            Below I listed all technologies that I&apos;ve been working recently.
          </p>
        </div>
        <h2 className="display-6 fw-bold lh1 px-1">Technical Skills</h2>
        <h3 className="mt-4">Learned Skills</h3>
        <div className="badge-container">
          <img className="badge-img" src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript" alt="javascript" />
          <img className="badge-img" src="https://img.shields.io/badge/HTML5-D9D9D9?style=for-the-badge&logo=html5" alt="html5" />
          <img className="badge-img" src="https://img.shields.io/badge/CSS3-016ab5?style=for-the-badge&logo=css3" alt="css3" />
        </div>
        <h3 className="mt-4">Tools</h3>
        <div className="badge-container">
          <img className="badge-img" src="https://img.shields.io/badge/VS_Code-black?style=for-the-badge&logo=visualstudiocode" alt="VS code" />
          <img className="badge-img" src="https://img.shields.io/badge/npm-black?style=for-the-badge&logo=npm" alt="npm" />
          <img className="badge-img" src="https://img.shields.io/badge/Webpack-black?style=for-the-badge&logo=webpack" alt="webpack" />
          <img className="badge-img" src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git" alt="git" />
          <img className="badge-img" src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github" alt="github" />
        </div>
        <h3 className="mt-4">Currently Learning</h3>
        <div className="badge-container">
          <img className="badge-img" src="https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
          <img className="badge-img" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
          <img className="badge-img" src="https://img.shields.io/badge/Bootstrap-%23563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
          <img className="badge-img" src="https://img.shields.io/badge/Sass-FF69B4?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
        </div>
      </div>
      <div className="py-5 text-center">
        <h2 className="display-6 fw-bold lh1 px-1">Portfolio</h2>
        <p className="fs-4">
          You can check my portfolio with all my projects
          hosted on GitHub pages clicking on the following button
        </p>
        <button type="button" className="btn btn-primary btn-lg px-4"><Link to="portfolio" className="nav-link text-white">Check my portfolio</Link></button>
      </div>
    </div>
  );
}

export default Home;
