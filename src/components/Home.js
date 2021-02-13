import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
// import Report from '../components/Report/Report'
const Home = () => {


  return (
    <div>
      <Navbar />
      <h1 className='text-center attendance'>Attendance management system</h1>
      <Sidebar />
    </div>
  );
};

export default Home;