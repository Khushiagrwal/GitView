import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // corrected import statement


function Input() {

  const [user, setUser] = useState("");
  const navigate = useNavigate(); // corrected function name

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.trim() !== "") {
      navigate(`/user/${user}`);
    }
  };

  return (
    <div>
        github view 
        search users information 
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder='Enter username ' onChange={(e)=>{setUser(e.target.value)}}/>
            <button type='submit'>Enter</button>
        </form>
    </div>
  );
}

export default Input;
