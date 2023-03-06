import {useState} from 'react';

const Contact = () => {
  const [width, setWidth] = useState(['5ch', '5ch', '5ch']);
  const changeWidth = (event) => {
    const index = Number(event.target.name);
    const value = event.target.value.length;
    const length = value + 1 <= 5 ? 5 : value;
    let newArray = [...width];
    newArray[index] = `${ length }ch`;
    setWidth(newArray);
  };
  return (
      <div className="contact">
        <select name="first" id="first" defaultValue="email">
          <option value="email">email:</option>
          <option value="telephone">tel:</option>
          <option value="link">web:</option>
          <option value="none"></option>
        </select>
        <input className="contact"
               type="text"
               name="0"
               style={ {'width': width[0]} }
               onChange={ changeWidth }
               placeholder=""/>
        <select name="first" id="first" defaultValue="telephone">
          <option value="email">email:</option>
          <option value="telephone">tel:</option>
          <option value="link">web:</option>
          <option value="none"></option>
        </select>
        <input className="contact"
               type="text"
               name="1"
               style={ {'width': width[1]} }
               onChange={ changeWidth }
               placeholder=""/>
        <select name="first" id="first" defaultValue="link">
          <option value="email">email:</option>
          <option value="telephone">tel:</option>
          <option value="link">web:</option>
          <option value="none"></option>
        </select>
        <input className="contact"
               type="text"
               name="2"
               style={ {'width': width[2]} }
               onChange={ changeWidth }
               placeholder=""/>
      </div>
  );
};

export default Contact;
