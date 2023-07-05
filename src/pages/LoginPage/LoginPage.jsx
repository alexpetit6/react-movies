import { useState } from "react";

export default function LoginPage({props}) {
  const [user, setUser] = props;
  const [newUser, setNewUser] = useState(null);
  function handleChange(evt) {
    setNewUser(evt.target.value)
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setUser(newUser)
    setNewUser(null)
  }
  return (
    <>
      <h1>Login Page</h1>
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input value={user} onChange={handleChange}/>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}