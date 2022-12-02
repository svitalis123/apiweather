import React, { useEffect, useState } from 'react';
import './Header.css';
import { BsFillGridFill } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = ({ setCelsius }) => {
  const initialState = {
    temp : 30,
    location: "USA",
    name: "CA",
  }
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(initialState);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca56329899msh7dd3c943e431d79p1cfdc0jsncfc3d742dfc0',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`, options)
      .then(response => response.json())
      .then(response => {
        let obj = {
          temp : response.current.temp_c,
          location: response.location.country,
          name: response.location.name,
        }
        setResult(obj);
      })
      .catch(err => console.error(err));
    setSearch('')
  }
  useEffect(() => {
    setCelsius(result.temp)
  }, [result, setCelsius])
 
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
          <span className="boldAccent">{result.name}</span>, {result.location}
        </div>
      </div>
      <div className="searchBarContainer">
        <form className="form" onSubmit={handleSubmit}>
          <BiSearchAlt2 className="searchIcon" />
          <input className="input" onChange={(e) => setSearch(e.target.value)} placeholder={'Search City...'} />
        </form>
      </div>
    </div>
  );
};
export default Header;
