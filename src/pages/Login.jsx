import React from 'react'

const Login = () => {
  return (
    <div>
      code for login form   
       <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Login</button>
      
       </form>
    </div>
  )
}

export default Login
