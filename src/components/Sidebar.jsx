import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/1.png';

function Sidebar() {
  const menuRef = useRef();
  const toggleClasses = (classList) => {
    const elements = menuRef.current.children;
    [...elements].map((entry) => entry.firstChild.classList.remove('active'));
    classList.add('active');
  };

  const clickHandler = (e) => {
    const { classList } = e.target;
    toggleClasses(classList);
  };
  return (
    <div className="col-2 d-none d-md-flex flex-column flex-shrink-0 p-3 text-bg-dark">
      <div className="d-flex flex-column gap-2 px-2">
        <h2 className="fs-5 fw-bold text-center align-self-center">Daniel Gallardo</h2>
        <img className="w-100 h-auto mw-170px rounded-circle bg-primary align-self-center" src={profile} alt="profile" />
        <p>Hey there! Welcome to my profile</p>
      </div>
      <hr />
      <ul ref={menuRef} className="social-icons nav nav-pills flex-column mb-auto px-2">
        <li className="nav-item"><Link onClick={clickHandler} className="active nav-link text-white" to="/">About me</Link></li>
        <li className="nav-item"><Link onClick={clickHandler} className="nav-link text-white" to="/resume">Resume</Link></li>
        <li className="nav-item"><Link onClick={clickHandler} className="nav-link text-white" to="/portfolio">Portfolio</Link></li>
        <li className="nav-item"><Link onClick={clickHandler} className="nav-link text-white" to="/contact">Contact Me</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
