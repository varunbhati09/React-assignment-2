import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for LandingPage

const LandingPage = ({ username }) => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  let timeOfDay;

  if (hour < 12) {
    timeOfDay = 'Morning';
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = 'Afternoon';
  } else {
    timeOfDay = 'Evening';
  }

  return (
    <div className="landing-page">
      <h2>Good {timeOfDay}, Rescuer!</h2>
      <p>How are you doing today, {username}?</p>
   
      <Outlet />
    </div>
  );
};

export default LandingPage;
