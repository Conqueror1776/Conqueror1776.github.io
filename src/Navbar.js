import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {burgerFull: true};
  }

  toggleBurger(){
    this.setState(state => ({
      burgerFull: !this.state.burgerFull
    }));
  }

  render() {
    return (
      <div className="Navbar">
        <h1 className='navbar-name'>Elijah Tamarchenko</h1>
        <div className='burger-bar' onClick={this.toggleBurger}>
          <div className={this.state.burgerFull ? 'bar1' : 'change bar1'}></div>
          <div className={this.state.burgerFull ? 'bar1' : 'change bar1'}></div>
          <div className={this.state.burgerFull ? 'bar1' : 'change bar1'}></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
