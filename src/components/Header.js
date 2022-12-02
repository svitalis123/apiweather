import React from 'react';
import './Header.css';
import { BsFillGridFill } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="wrapper">
      <div className="headerLeft">
        <div className="BsFillGridFillContainer">
          <BsFillGridFill className="BsFillGridFill" />
        </div>
        <div className="BsBellFillContainer">
          <BsBellFill className="BsBellFill" />
        </div>
        <div className="locationContainer">
          <MdLocationOn className="locationIcon" />
          <span className="boldAccent">CA</span>, US
        </div>
      </div>
      <div className="searchBarContainer">
        <form className="form">
          <BiSearchAlt2 className="searchIcon" />
          <input className="input" placeholder={'Search City...'} />
        </form>
      </div>
    </div>
  );
};
export default Header;
