import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    }
  }

  handleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {

    const menuClass = this.state.menuOpen ? 'menu-open' : ''

    return (
      <div>
        <nav>
          <h1>Cute and Quirky Cows!</h1>
          <ul className="nav-links">
            <li>Home!</li>
            <li>Shop!</li>
            <li>Photos!</li>
            <li>Adopt!</li>
            <li>Bells!</li>
            <li>Chik Fil A Locations</li>
          </ul>
          <img
            onClick={this.handleClick}
            className="hamburger_menu"
            src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
            alt="hamburger_menu"
          />
        </nav>
        <menu className={menuClass}>
          <ul className="menu-links">
            <li>Home!</li>
            <li>Shop!</li>
            <li>Photos!</li>
            <li>Adopt!</li>
            <li>Bells!</li>
            <li>Chik Fil A Locations</li>
          </ul>
        </menu>
      </div>
    )
  }
}

export default Nav;