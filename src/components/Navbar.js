import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems.js";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div id="navbar-container">
        <nav className="NavbarItems">
          <img className="navbar-logo" src={logo} alt="sk8yard logo" />
          <div className="menu-icons">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} onClick={this.toggleMenu} />
            ) : (
              <FontAwesomeIcon icon={faBars} onClick={this.toggleMenu} />
            )}
          </div>
          <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              const isLastLink = index === MenuItems.length - 1;
              const linkClassName = isLastLink ? "nav-links last-link" : "nav-links";
              return (
                <li key={index}>
                  <a className={linkClassName} href="/">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
