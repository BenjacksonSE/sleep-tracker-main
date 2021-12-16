import { BiGridAlt } from "react-icons/bi";
import { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }
  
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Sleep Tracker</a>
        <div className={`nav__menu ${toggle ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={handleToggle}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={handleToggle}>About</a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={handleToggle}>Services</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={handleToggle}>Contact me</a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <BiGridAlt className="bx bx-grid-alt"  onClick={handleToggle}/>
        </div>

        <a href="#" class="button button__header">Sign Up Now</a>
      </nav>
    </header>
  )
}

export default Header
