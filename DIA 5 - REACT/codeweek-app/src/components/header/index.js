import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Teste extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    const isTop = this.state.isTop;
    return (
      <div
        style={{
          color: "white",
          backgroundColor: isTop ? "transparent" : "black",
          boxShadow: isTop ? "unset" : "0 2px blueviolet",
          zIndex: "100",
          width: "100%",
          position: "fixed",
          top: "0",
          height: "5vh"
        }} className='header'
      >
        <Link to='/' class='logo'>
          CodeWeek
        </Link>
        <div className='header-right'>
          <Link to='/event'>Evento</Link>
          <Link to='/calendario'>Agenda</Link>
          <Link to='#contact'>Contato</Link>
        </div>
      </div>
    );
  }
}
