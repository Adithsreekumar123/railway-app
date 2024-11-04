import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Create.css'; // Optional: Rename the CSS file to reflect the new component name

const Addaccount = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    // Perform any account creation logic here
    console.log('Form Data:', formData);
    navigate('/login'); // Redirect to the login page after account creation
  };

  const handleBackClick = () => {
    navigate('/view'); // Navigate back to the view page
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {/* Left side with the create account form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              {/* Back arrow button */}
              <button onClick={handleBackClick} className="btn btn-light mb-3">
                &larr; Back to View
              </button>

              <h1 className="account-heading text-center">Create Account</h1>
              <p className="caption-text text-center">Join us to manage your railway bookings easily</p>

              <form onSubmit={handleCreateAccountClick}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      className="form-control"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right side with the background image */}
          <div className="col-12 col-md-6 background-image">
            {/* Empty column for background image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addaccount;
