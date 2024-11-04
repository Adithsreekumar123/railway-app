import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Book.css'; // Rename the CSS file to reflect the new component name

const Book = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookClick = () => {
    // Add any booking logic here if needed
    navigate('/confirmation'); // Navigate to the confirmation page
  };

  const handleBackClick = () => {
    navigate('/view'); // Navigate back to the view page
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {/* Left side with the booking form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              {/* Back arrow button */}
              <button onClick={handleBackClick} className="btn btn-light mb-3">
                &larr; Back to View
              </button>
              
              <h1 className="booking-heading text-center">BOOK A TICKET</h1>
              <p className="caption-text text-center">Plan your journey with ease and comfort</p>

              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="departure" className="form-label">Departure Station</label>
                  <input type="text" id="departure" className="form-control" placeholder="Enter departure station" />
                </div>

                <div className="col-12">
                  <label htmlFor="arrival" className="form-label">Arrival Station</label>
                  <input type="text" id="arrival" className="form-control" placeholder="Enter arrival station" />
                </div>

                <div className="col-12">
                  <label htmlFor="date" className="form-label">Travel Date</label>
                  <input type="date" id="date" className="form-control" />
                </div>

                <div className="col-12">
                  <label htmlFor="passengerName" className="form-label">Passenger Name</label>
                  <input type="text" id="passengerName" className="form-control" placeholder="Enter passenger name" />
                </div>

                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-primary" onClick={handleBookClick}>
                    Book Now <span>&#8594;</span> {/* Arrow symbol added */}
                  </button>
                </div>

                <div className="col-12 text-center mt-3">
                  <p>
                    Need help? 
                    <Link to="/help" className=""> Contact Support</Link>
                  </p>
                </div>
              </div>
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
}

export default Book;
