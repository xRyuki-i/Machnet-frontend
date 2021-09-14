import './form.css';
import React, { useState } from 'react';

const Input = ({inputName, inputValue, handleChange}) => {
    const title = inputName[0].toUpperCase() + inputName.substring(1);

  return (
    <>
        <label>{title + ' :'}</label>
        <input  
          className="text"
          type = "text"
          name = {inputName} 
          value = {inputValue}
          onChange = {handleChange}
          placeholder = {'Enter your '+ inputName}/>
    </>
  );
}

const Form = () => {
    const [person, setPerson] = useState({name: 'abc',age:'',adderss: '', sex: ''});
    const [people, setPeople] = useState([]);
    const details = Object.keys(person);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };
    const handleSubmit = (e) => {
        let hasNumber = /\d/;
        e.preventDefault();
        if (!hasNumber.test(person.name) && !isNaN(person.age) && person.adderss &&
         (person.sex.toUpperCase() === "MALE" || person.sex.toUpperCase() === "FEMALE")) {
            const newPerson = { ...person};
            setPeople([...people, newPerson]);
            setPerson({ firstName: '', age: '', address: '', sex: '' });
        }else{
            alert("Invalid entry");
        }
    };

    return (
        <>
            <form>
                {

                    Object.keys(person).map((value, index) => {                
                        return <Input key={`imp${index}`} inputName={value} inputValue={person[value]} handleChange={handleChange}/>
                    })
                }

                <button className="btn__form" type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form;
