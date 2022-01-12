import './nav.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaCompass, FaHeart, FaTshirt } from 'react-icons/fa';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { FaBook, FaLeaf } from 'react-icons/fa';
import { MdVideoLabel } from 'react-icons/md';
import { RiHistoryLine } from 'react-icons/ri';
import { GiLipstick, GiWool } from 'react-icons/gi';

export const Nav = () => {
  const search = new URLSearchParams(useLocation().search);
  const searchedCategory = search.get('category')
    ? search.get('category')
    : 'All Videos';
  return (
    <div className="nav-container">
      <div className="nav-main">
        <nav className="nav-menu">
          <div className="nav-head">MENU</div>
          <NavLink
            to="/explore"
            className="menu-main"
            activeClassName="nav-active"
          >
            <div className="nav-icons-container">
              <FaCompass className="nav-icons" />
            </div>

            <span className="menu-head">Explore</span>
          </NavLink>
          <NavLink
            to="/liked"
            className="menu-main"
            activeClassName="nav-active"
          >
            <div className="nav-icons-container">
              <FaHeart className="nav-icons" />
            </div>

            <span className="menu-head">Liked</span>
          </NavLink>
          <NavLink
            to="/playlists"
            className="menu-main"
            activeClassName="nav-active"
          >
            <div className="nav-icons-container">
              <BsFillCollectionPlayFill className="nav-icons" />
            </div>

            <span className="menu-head">Playlists</span>
          </NavLink>
          <NavLink
            to="/history"
            className="menu-main"
            activeClassName="nav-active"
          >
            <div className="nav-icons-container">
              <RiHistoryLine className="nav-icons" />
            </div>

            <span className="menu-head">History</span>
          </NavLink>
        </nav>
        <nav className="nav-category">
          <div className="nav-head">CATEGORY</div>
          <NavLink
            to="/explore?cat=basics"
            className={`cat-main ${
              searchedCategory === 'basics' ? 'nav-active' : ''
            }`}
          >
            <div className="nav-icons-container">
              <FaBook className="nav-icons" />
            </div>

            <span className="cat-head">Basics</span>
          </NavLink>
          <NavLink
            to="/explore?category=indian_textile"
            className={`cat-main ${
              searchedCategory === 'indian_textiles' ? 'nav-active' : ''
            }`}
          >
            <div className="nav-icons-container">
              <FaTshirt className="nav-icons" />
            </div>

            <span className="cat-head">Indian Textiles</span>
          </NavLink>
          <NavLink
            to="/explore?category=styling"
            className={`cat-main ${
              searchedCategory === 'styling' ? 'nav-active' : ''
            }`}
          >
            <div className="nav-icons-container">
              <GiLipstick className="nav-icons" />
            </div>

            <span className="cat-head">Styling</span>
          </NavLink>
          <NavLink
            to="/explore?category=handloom"
            className={`cat-main ${
              searchedCategory === 'handloom' ? 'nav-active' : ''
            }`}
          >
            <div className="nav-icons-container">
              <GiWool className="nav-icons" />
            </div>

            <span className="cat-head">Handloom</span>
          </NavLink>
          <NavLink
            to="/explore?category=brands"
            className={`cat-main ${
              searchedCategory === 'brands' ? 'nav-active' : ''
            }`}
          >
            <div className="nav-icons-container">
              <MdVideoLabel className="nav-icons" />
            </div>

            <span className="cat-head">Brands</span>
          </NavLink>
          <NavLink
            to="/explore?category=others"
            className={`cat-main ${
              searchedCategory === 'others' ? 'nav-active' : ''
            }`}
          >
            <div className="nav-icons-container">
              <FaLeaf className="nav-icons" />
            </div>

            <span className="cat-head">Others</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
