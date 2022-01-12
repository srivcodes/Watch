import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import './styles.css';
import { useAuth } from 'Context/AuthContext';
// import { useAuth } from "../../Context";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    state: { userName }
  } = useAuth();
  // const data = useAuth();
  // console.log(data, 'data from useAuth');
  return (
    <div className="header-container">
      <nav className="header-main">
        <div className="head-left">
          <Link to="/" className="head-main-logo">
            <span className="head-watch">Watch</span>
          </Link>
        </div>
        <div className="head-center">
          <div className="search-container">
            <input
              type="search"
              name="search-bar"
              id="search-bar-main"
              placeholder="Search"
              className="search-bar"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              onKeyDown={(e) => {
                if (searchTerm !== '' && e.key === 'Enter') {
                  navigate(
                    `/search?searchTerm=${encodeURIComponent(searchTerm)}`
                  );
                  setSearchTerm('');
                }
              }}
            />
            <button
              className="search-icon-container"
              aria-label="search-button"
              onClick={() => {
                if (searchTerm !== '') {
                  navigate(
                    `/search?searchTerm=${encodeURIComponent(searchTerm)}`
                  );
                  setSearchTerm('');
                }
              }}
            >
              <BiSearch className="search-icon" />
            </button>
          </div>
        </div>
        <div className="head-right ">
          <Link to="/profile" className="heading flex-align-center">
            <FaUserCircle className="head-icons" />
            <span className="head-hidden head-login ">
              {userName ? userName : 'Login'}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};


