import React from 'react';
import './Navbar.css';

function Navbar() {
  /*
  constructor(props) {
    super(props);
    this.state = {burgerFull: true};
  }

  toggleBurger(){
    this.setState(state => ({
      burgerFull: !this.state.burgerFull
    }));
  }
  */

    return (
      <div className="Navbar">
        <h1 className='navbar-name'>Elijah Tamarchenko</h1>
        <div className='burger-bar'>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>
    );

}

export default Navbar;
