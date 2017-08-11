import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => (
  <div className='container'>
   <h1>About Pauline</h1>
   <p> Page is still in progress</p>
   <p>For further information, follow the link below</p>

   <p> Born and raised in the small town of Whangarei. Studied at AUT University in Auckland where I first studied Sport and Recreation. From here, my love
     for art developed and during my second of University, I made a life changing decision and went into Art and Design.</p>
     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
)

export default AboutMe
