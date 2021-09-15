import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isDataFiltered, setIsDataFiltered] = useState(false);


  const getDrinks = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then (res => {
        const drinks = res.data.drinks;
        const drinkName = drinks.map(drink => {
          return [drink.strDrink, drink.strCategory];  
        })
        // console.log(drinkName);
        setData([...data, ...drinkName]);
        setIsLoading(false);
      })
      .catch (err => {
        console.log("You've encountered an error: ", err);
      })
  }

  const handleChange = (e) => {
          const value = e.target.value;
          setSearchValue(value);
          setIsDataFiltered(false);
      };

  const handleSubmit = (e) => {
          e.preventDefault();
          const filteredData = data.filter(drink => {
            return (drink[0].toLowerCase().includes(searchValue.toLowerCase()) ||
            drink[1].toLowerCase().includes(searchValue.toLowerCase()));
          })
          setFilteredData(filteredData);
          setIsDataFiltered(true);
          setSearchValue('');
      };

  useEffect(()=>{
    getDrinks();
  },[])


    return (
      <section className="wrapper"> 

      <div className="search__wrapper">
        <input 
          type="text"
          name="search"
          value = {searchValue}
          onChange = {handleChange}
          className = "input__wrapper"
          placeholder="Search by name or category" />

        <button className="button__wrapper" type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>

      <div className="guide__wrapper">Categories: Cocktail, Shot, Ordinary Drink, (Coffee / Tea), (Other/Unknown)</div>
        
        {/* <div className="App">
          <button onClick={getDrinks}>List drinks</button>
        </div> */}
        <div className="list__wrapper">
          {
            isLoading && 
            (
              <h1>Loading drinks...</h1>
            )
          }
          { (!isLoading && !isDataFiltered) &&
            (
              <div className="items__wrapper">
                {data.map((drink, index) => {
                  return (
                    <div className="item__list" key={index}>
                      <p>{drink[0]}</p>
                      <p className="category">{drink[1]}</p>
                    </div>
                  )
                })}
              </div>        
            )
          }
          { isDataFiltered &&
            <div className="items__wrapper">
                {filteredData.map((drink, index) => {
                   return (
                    <div className="item__list" key={index}>
                      <p>{drink[0]}</p>
                      <p className="category">{drink[1]}</p>
                    </div>
                  )
                })}
              </div>
          }
        </div>
      </section>
    );
}

export default App;
