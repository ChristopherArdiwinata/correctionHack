import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userEmail: '',
    userPassword: '',
  });
  // const { loginUser } = useUser();
  const { loginUser } = { loginUser: async (loginData) => { } };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await loginUser(loginData);
    navigate('/home');

  };

  return (
    <>
      <div className='d-flex center'>
        <img alt='logo' className='w-70 big-img ml-3 mt-2' />
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="Enter Email"
              value={loginData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="userPassword"
              placeholder="Enter Password"
              value={loginData.userPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <br />
          <br />
          <br />
          <a href="/forgot-password" className='center-span'>Forgot Password?</a>

          <hr />

          <span className='center-span'>No account?&nbsp;&nbsp;<a href="/register" className='underline'>Register</a></span>
        </form>
      </div>
    </>
  );
};
