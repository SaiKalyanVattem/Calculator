import React, { useState } from 'react';
import './style.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCpasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  function handleSubmit() {
    if (password != confPassword) {
      alert('Password Does Not Match');
    } else {
      alert(
        'A form was submitted with Name :"' +
          name +
          '" ,Age :"' +
          age +
          '" and Email :"' +
          email +
          '"'
      );
    }
    // console.log('Hai');
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            handleNameChange(e);
          }}
          placeholder="Enter Your Name"
        />
        <br />
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            handleAgeChange(e);
          }}
          placeholder="Enter Your Age"
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            handleEmailChange(e);
          }}
          placeholder="Enter Your Email"
        />
        <br />
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          placeholder="Enter Your Password"
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="text"
          value={confPassword}
          onChange={(e) => {
            handleCpasswordChange(e);
          }}
          placeholder="Confirm Your Password"
        />
        <br />
        <input type="submit" value="Submit Form" />
        {/* <button onClick={handleSubmit}>Submit Form</button> */}
      </form>
    </div>
  );
}
export default App;
