/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import {
  format, parseISO,
} from 'date-fns';
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile from '../assets/images/1.png';

function Sidebar({ user }) {
  const {
    login, avatar_url, name, location, html_url, created_at,
  } = user;
  const urlLocation = useLocation();
  const menuRef = useRef();

  useEffect(() => {
    const elements = [...menuRef.current.children];
    elements.forEach((entry) => {
      if (entry.firstChild.pathname === urlLocation.pathname) {
        entry.firstChild.classList.add('active');
      } else {
        entry.firstChild.classList.remove('active');
      }
    });
  }, [urlLocation]);

  return (
    <div className="col-2 d-none d-md-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100 overflow-auto">
      {user && (
      <div className="d-flex flex-column gap-2 px-2">
        <a href={html_url} className="text-decoration-none text-white text-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          {' '}
          { login}
          <img className="w-75 h-auto mw-170px rounded-circle bg-primary align-self-center" src={avatar_url || profile} alt="profile" />
        </a>
        <h2 className="fs-5 fw-bold text-center align-self-center">{name || 'User'}</h2>
        <p className="d-flex flex-column fs-6 my-0">
          Location:
          {' '}
          <span className="text-center px-1">{ location }</span>
        </p>
        <p className="d-flex flex-column fs-6 my-0">
          User since:
          {' '}
          <span className="text-center px-1">{format(parseISO(created_at), 'MMM/dd/yyyy') }</span>
        </p>
      </div>
      )}
      <hr />
      <ul ref={menuRef} className="social-icons nav nav-pills flex-column mb-auto px-2">
        <li className="nav-item"><Link className="nav-link text-white" to="/">About me</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/portfolio">Portfolio</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
