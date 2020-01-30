import React from "react";
import "./styles.css";

export default function Main() {
  return (
    <div className='content'>
      <img
        className='img'
        src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='code bg'
      />
      <div className='centered'>
        <p className='big-font'>CodeWeek</p>
        <span id='demo'></span>
      </div>
      <div className='centered-down bg-purple'>
        <form className='form-inline'>
          <input type='email' name='email' placeholder='Seu@email.com' />
          <button type='submit'>Inscrever</button>
        </form>
      </div>
    </div>
  );
}
