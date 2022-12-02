// import {useState} from 'react';
import useInput from "../hooks/useInput";

const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`You are trying to login as ${usernameInput.value} with the password ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Login to the site!</h2>

      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          { ...passwordInput }
          // onBlur={passwordInput.onBlur}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
