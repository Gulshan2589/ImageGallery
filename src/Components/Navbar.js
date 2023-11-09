import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './Navbar.css';


export const Navbar = ({searchTerm, toggleDarkMode, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className={darkMode ? "dark-mode" : "navbar-light"}>
      <p className={darkMode ? 'logodark' : 'logo'}>Image Gallery</p>
      <input
        className='searchbar'
        type="text"
        placeholder="Search Something"
        value={searchTerm}
        onChange={(e) => (e.target.value)}
      />
      <ul className="navbar-list">
        <li className={darkMode ? "navbar-itemdark" : "navbar-item"}>
          <Link to="/">Home</Link>
        </li>
        <li className={darkMode ? "navbar-itemdark" : "navbar-item"}>
          <Link to="/explore">Explore</Link>
        </li>
        <li className={darkMode ? "navbar-itemdark" : "navbar-item"}>
          <Link to="/collection">Collection</Link>
        </li>
        <li className={darkMode ? "navbar-itemdark" : "navbar-item"}>
          <Link to="/community">Community</Link>
        </li>
      </ul>
      <div className='switchdiv'>
        <p className={darkMode ? "switchstatedark" : "switchstate"}>{darkMode ? "Dark Mode" : "Light Mode"}</p>
        <Switch
          checked={darkMode}
          color="primary"
          onChange={toggleDarkMode}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <div className='smallscreen'>
        <GiHamburgerMenu onClick={() => setToggleMenu(true)} className='menu' />
        {toggleMenu && (
          <div className={darkMode ? "overlaynavbard" : "overlaynavbarl"}>
            <ul className="navbarlistsmall">
              <li className={darkMode ? "navbar-itemdarksml" : "navbar-itemsml"}>
                <Link to="/" onClick={() => setToggleMenu(false)}>Home</Link>
              </li>
              <li className={darkMode ? "navbar-itemdarksml" : "navbar-itemsml"}>
                <Link to="/explore" onClick={() => setToggleMenu(false)}>Explore</Link>
              </li>
              <li className={darkMode ? "navbar-itemdarksml" : "navbar-itemsml"}>
                <Link to="/collection" onClick={() => setToggleMenu(false)}>Collection</Link>
              </li>
              <li className={darkMode ? "navbar-itemdarksml" : "navbar-itemsml"}>
                <Link to="/community" onClick={() => setToggleMenu(false)}>Community</Link>
              </li>
            </ul>
            <MdClose className={darkMode ? "overlay__closed" : "overlay__closel"} onClick={() => setToggleMenu(false)} />
          </div>
        )}
      </div>
    </nav >
  );
};

//export default Navbar;
