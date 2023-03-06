import {useState} from 'react';

const Experience = () => {
  const [state, setState] = useState(
      [{companyName: '', from: new Date(), to: new Date(), description: ''}]);
  const updateState = () => {};
  return (
      <div className="experience">
        <div className="work">
          <h2 className="medium">Experience</h2>
          <div>
            <input type="text"
                   onChange={ updateState }
                   key="#"
                   name="companyName"
                   value={ state.name }
                   placeholder="Company Name"/>
          </div>
          <div>
            <label>
              <input type="date"
                     onChange={ updateState }
                     name="from"
                     value={ state.from }/>
            </label>
            <label>to
              <input type="date"
                     onChange={ updateState }
                     name="to"
                     value={ state.to }/>
            </label>
          </div>
          <div>
            <label>Description
              <textarea type="text"
                        onChange={ updateState }
                        name="description"
                        value={ state.description }
                        placeholder="">
          </textarea>
            </label>
          </div>
        </div>
      </div>
  );
};

export default Experience;
