import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => (
  <div className='container'>
   <h1>About Pauline</h1>
   <p> Page is still work in progress</p>
   <p> Born and raised in the small town of Whangarei, New Zealand</p>
   <p> Have a degree in Graphic Design</p>
    <p> If you would like more information about me, please don't hesitate to contact me.</p>
     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
)

export default AboutMe
