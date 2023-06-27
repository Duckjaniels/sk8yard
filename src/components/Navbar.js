import { Component } from "react";
import {Link} from "react-router-dom"
import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems.js"
import logo from '../assets/logo.png'


class Navbar extends Component{
  render(){
    return(
      <div id="navbar-container">
      <nav className="NavbarItems">
        <img src={logo} alt="sk8yard logo"/>
        <ul className="nav-menu">
          {MenuItems.map((item, index) =>{
            return(
            <li key={index}>
              <a href="/">
                  {item.title}
                  </a>
            </li>
            );
          })}
        </ul>
      </nav>
      </div>
    )
  }
}
export default Navbar;