import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
    userRoles: {
      admin: 5150,
      editor: 1982,
      user: 2001
    }
  });
  const { registerUser } = { registerUser: async (formData) => { } };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    await registerUser(formData);
    navigate('/home');
  };
  return (
    <>
      <div className='d-flex center'>
        <img alt='logo' className='w-50 big-img ml-3 mt-2' />
        <form className="register-form pt-2 mt-5" onSubmit={handleRegister} >
          <h2 className='pb-2 pt-3'>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="userFirstName"
              placeholder="First name"
              value={formData.userFirstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="userLastName"
              placeholder="Last name"
              value={formData.userLastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="Email"
              name="userEmail"
              placeholder="Enter email"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="userPassword"
              placeholder="Create password"
              value={formData.userPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="userConfirmPassword"
              placeholder="Confirm password"
              value={formData.userConfirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required />
              I agree to the Terms and Privacy Policy
            </label>
          </div>
          <button type="submit" className="submit-btn">Create account</button>
          <div className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </form>
      </div>
    </>
  );
};