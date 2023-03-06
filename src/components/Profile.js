import {useState} from 'react';

const Profile = () => {
  const [state, setState] = useState('');
  const updateState = (event) => {
    event.preventDefault();
    setState(() => event.target.value);
  };

  const lorem = 'Lorem ipsum dolor sit amet.';

  return (
      <div className="profile">
        <h2 className="medium">Profile</h2>
        <textarea className="smallInput"
                  onChange={ updateState }
                  value={ state }
                  placeholder="">
        </textarea>
      </div>
  );
};

export default Profile;
