import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends Component() {
  render() {
    return (
      <div>
        <div className='header'>
          <Link to='/' class='logo'>
            CodeWeek
          </Link>
          <div className='header-right'>
            <Link to='/event'>Evento</Link>
            <Link to='/calendario'>Agenda</Link>
            <Link to='#contact'>Contato</Link>
          </div>
        </div>
      </div>
    );
  }
}
