import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SubHeader from './SubHeader';

const View = () => {
    const navigate = useNavigate(); // Initialize navigate for logout
    const [data, changeData] = useState([
        { 
            "TrainName": "Rajdhani Express", 
            "Departure": "Delhi", 
            "Arrival": "Mumbai", 
            "imglink": "https://i.pinimg.com/564x/51/9a/87/519a872eb656d92864b746375a9b258b.jpg" 
        },
        { 
            "TrainName": "Shatabdi Express", 
            "Departure": "Mumbai", 
            "Arrival": "Pune", 
            "imglink": "https://i.pinimg.com/564x/e6/60/a7/e660a7e2cb10285815853e6b0047d7f6.jpg" 
        },
        { 
            "TrainName": "Duronto Express", 
            "Departure": "Kolkata", 
            "Arrival": "Delhi", 
            "imglink": "https://i.pinimg.com/564x/f4/63/f5/f463f584c4303342cbd6108fc51b8855.jpg" 
        },
        { 
            "TrainName": "Garib Rath", 
            "Departure": "Chennai", 
            "Arrival": "Bangalore", 
            "imglink": "https://i.pinimg.com/564x/2a/e1/14/2ae1140061a3b993721c95ae089b8132.jpg" 
        },
        { 
            "TrainName": "Jan Shatabdi", 
            "Departure": "Lucknow", 
            "Arrival": "Kanpur", 
            "imglink": "https://i.pinimg.com/564x/3f/f2/e8/3ff2e8e2bf81988568f1aaf9804d2497.jpg" 
        },
        { 
            "TrainName": "Intercity Express", 
            "Departure": "Ahmedabad", 
            "Arrival": "Surat", 
            "imglink": "https://i.pinimg.com/564x/64/7a/40/647a4031c6c381b9300b738dfb67c8ac.jpg" 
        },
        { 
            "TrainName": "Tejas Express", 
            "Departure": "Mumbai", 
            "Arrival": "Goa", 
            "imglink": "https://i.pinimg.com/564x/7f/03/5a/7f035a639eef83f9c2aedbfc9da2eee3.jpg" 
        },
        { 
            "TrainName": "Vande Bharat", 
            "Departure": "Delhi", 
            "Arrival": "Varanasi", 
            "imglink": "https://i.pinimg.com/564x/61/1b/33/611b33817139252f9d65003f82bd817c.jpg" 
        }
    ]);

    const handleLogout = () => {
        // Add any logout logic here, like clearing tokens or user data
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div>
            <SubHeader />
            <div className="container mt-3 d-flex justify-content-end">
                <button onClick={handleLogout} className="btn btn-danger btn-sm">Logout</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">
                            {data.map((value, index) => {
                                return (
                                    <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                            <img height="250" src={value.imglink} className="card-img-top" alt={`${value.TrainName} Image`} />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.TrainName}</h5>
                                                <p className="card-text">Departure: {value.Departure}</p>
                                                <p className="card-text">Arrival: {value.Arrival}</p>
                                                <a href="#" className="btn btn-primary">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
