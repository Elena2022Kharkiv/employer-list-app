import { useState } from "react";
import "./AddForm.css";

export const AddForm = (props) => {
  const { addEmployer, isEditActive } = props;
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const addHandler = () => {
    if (isEditActive) return;
    
    const employer = {
      name,
      surname,
      active: true
    };

    addEmployer(employer);
    
    setName('');
    setSurname('');
  }

  return (
    <div className="employer-add-form">
      <label>Name
        <input
          onChange={ e => setName(e.target.value) }
          value={ name }
          type="text" 
          className="employer-add-form__input" 
        />
      </label>
      
      <label>Surname
        <input 
          onChange={ e => setSurname(e.target.value) }
          value={ surname }
          type="text" 
        />
      </label>
      <button
        onClick={ addHandler } 
        className="employer-add-form__btn"
      >
        Add
      </button>
    </div>
  );
};