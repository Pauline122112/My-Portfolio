import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => (
  <div className='container'>
   <h1>About Pauline</h1>
   <p> Page is still in progress</p>
   <p>For further information, follow the link below</p>

   <p> Born and raised in the small town of Whangarei, New Zealand</p>
     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
)

export default AboutMe
