import {useState} from 'react';

const Headers = () => {
  const [state, setState] = useState({name: '', title: ''});
  const updateState = (event) => {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    console.log(key);
    setState({...state, [key]: value});
    // console.log(state);
  };
  return (
      <div className="header">
        <div className="portrait">
          <img src="#" alt="portrait of myself"/>
        </div>
        <div className="identity">
          <div>
            <input className="large"
                   type="text"
                   onChange={ updateState }
                   name="name"
                   value={ state.name }
                   placeholder="Your Name"/>
          </div>
          <div>
            <input className="medium"
                   type="text"
                   onChange={ updateState }
                   name="title"
                   value={ state.title }
                   placeholder="your title"/>
          </div>
        </div>
      </div>
  );
};

export default Headers;
