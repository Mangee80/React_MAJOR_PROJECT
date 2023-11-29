import React from 'react'

import Banner from '../components/Home/Banner.jsx';
import SignUpForm from '../components/Home/SignUpForm.jsx';

const Home = () => {
  return (
    <div style={{display: "flex"}}>
      <div><Banner /></div>
      <div><SignUpForm /></div>
    </div>
  )
}

export default Home;