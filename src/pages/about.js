import React from 'react'
import { Link } from 'gatsby'

import Home from '../components/home'

const SecondPage = () => (
  <Home selectedTab="2">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Home>
)

export default SecondPage
