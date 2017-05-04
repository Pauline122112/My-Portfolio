import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => (

  <div className='container'>
   <h1>Paulines Portfolio</h1>

  <div className='AboutMe'>
     <Link to='/AboutMe'>
           <img src='' alt='About Me' />
     </Link>
  </div>

  <div className='Blog'>
     <Link to='/Blog'>
           <img src='' alt='Blog' />
     </Link>
  </div>

  <div className='Contact'>
     <Link to='/Contact'>
           <img src='' alt='Contact Me' />
     </Link>
  </div>

  <div className='WebDesign'>
     <Link to='/WebDesign'>
           <img src='' alt='Web Design' />
     </Link>
  </div>

  <div className='GraphicDesign'>
     <Link to='/GraphicDesign'>
           <img src='' alt='Graphic Design' />
     </Link>
  </div>
  <div className='WebDevelopment'>
     <Link to='/WebDevelopment'>
           <img src='' alt='Web Development' />
     </Link>
  </div>

</div>
)

export default DefaultPage
