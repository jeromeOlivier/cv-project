import {useState} from 'react';

const Headers = () => {
  const [state, setState] = useState({name: '', title: ''});
  const updateState = (event) => {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    console.log(key);
    setState({...state, [key]: value});
  };
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
      <div className="header">
        <div className="identity">
          <div>
            <label htmlFor="name">name:</label>
            <input type="text"
                   id="name"
                   name="name"
                   onChange={ updateState }
                   required={ true }
                   placeholder="required"/>
          </div>
          <div>
            <label htmlFor="title">title:</label>
            <input type="text"
                   id="title"
                   onChange={ updateState }
                   name="title"
                   required={ false }
                   placeholder="optional"/>
          </div>
        </div>
        <div className="contact">
          <div>
            <label htmlFor="email">email:</label>
            <input type="text"
                   id="email"
                   name="email"
                   onChange={ updateState }
                   required={ true }
                   placeholder="required"/>
          </div>
          <div>
            <label htmlFor="telephone">tel:</label>
            <input type="text"
                   id="telephone"
                   name="telephone"
                   onChange={ updateState }
                   required={ false }
                   placeholder="optional"/>
          </div>
          <div>
            <label htmlFor="website">web:</label>
            <input type="text"
                   id="website"
                   name="website"
                   onChange={ updateState }
                   required={ false }
                   placeholder="optional"/>
          </div>
          <div>
            <label htmlFor="street">street:</label>
            <input type="text"
                   id="street"
                   name="street"
                   required={ false }
                   onChange={ updateState }
                   placeholder="optional"/>
          </div>
          <div>
            <label htmlFor="city">city:</label>
            <input type="text"
                   id="city"
                   name="city"
                   required={ false }
                   onChange={ updateState }
                   placeholder="optional"/>
          </div>
          <div>
            <label htmlFor="area">province:</label>
            <input type="text"
                   id="area"
                   name="area"
                   required={ false }
                   onChange={ updateState }
                   placeholder="optional"/>
          </div>
          <div>
            <label htmlFor="area">postcode:</label>
            <input type="text"
                   id="postal"
                   name="postal"
                   required={ false }
                   onChange={ updateState }
                   placeholder="optional"/>
          </div>
          <div>
            <label htmlFor="area">country:</label>
            <input type="text"
                   id="country"
                   name="country"
                   required={ false }
                   onChange={ updateState }
                   placeholder="optional"/>
          </div>
        </div>
      </div>
  );
};

export default Headers;
