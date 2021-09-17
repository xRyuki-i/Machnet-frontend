import React from 'react';
import './home.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const Home = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    let value = e.target.value;
    setUserName(value);
    setIsError(false);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (userName.length === 0) {
      setErrorMessage('Please enter username');
      setIsError(true);
    } else {
      axios.get(`https://api.github.com/users/${userName}`)
      .then(res => {
        history.push("/profile", userName);
      })
      .catch(err => {
        setIsError(true);
        setErrorMessage('Invalid Input!!! Username: ' + userName + " doesn't exist.");
        console.log(err);
      })
    }
      
  }

    return (
      <>
        <div className="container">
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

        { isError && 
          <div className="error">
             {errorMessage}
          </div>
        }
      </>   
    )
}

export default Home;
