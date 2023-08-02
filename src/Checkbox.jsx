import React, { useState } from 'react';

export default function Checkbox() {
  const countries = ['pakistan', 'india', 'bangladesh', 'afg'];

  const [country, setCountry] = useState(countries.map((country) => ({ name: country, checked: false })));

  const deleteItem = (index) => {
    const updatedCountries = [...country];
    updatedCountries.splice(index, 1);
    setCountry(updatedCountries);
  };

  const handleCheckboxChange = (index) => {
    const updatedCountries = [...country];
    updatedCountries[index].checked = !updatedCountries[index].checked;
    setCountry(updatedCountries);
  };

  return (
    <>
      <ul>
        {country.map((ele, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={ele.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {ele.name}
            {ele.checked && <button onClick={() => deleteItem(index)}>delete</button>}
          </li>
        ))}
      </ul>
    </>
  );
}
