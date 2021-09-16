import React from 'react';
import './home.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    let value = e.target.value;
    setUserName(value);
  }

  const handleClick = (e) => {
      e.preventDefault();
      history.push("/profile", userName);
  }

    return (
        <div className="content">
      <section className="title__content">
        <h1>Github Profile</h1>

        <p>Generate your Github Profile</p>
      </section>
      
      <form className="form__content">
        <label className ="label__form">Github Username</label>

        <div className="input__form">
          <input 
            type="text" 
            className="text__form"
            value = {userName}
            onChange = {handleChange} />
   
          <button type="submit" className="button__form" onClick={handleClick}>Generate</button>
        </div>
      </form>


    </div>
    )
}

export default Home;
