import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => (

  <div className='container'>
   <h1>Introduction</h1>
   <p>I am a full stack web developer and designer who is looking for work that will utilise my Design and Web Development skills. I have recently been working at Police National Headquarters where I was analysing software and its effectiveness to serve both the police and our clients.  It was here that a flame was reignited around creating processes and solutions that really serve the user. I was also looking for something to stretch me - a new challenge. I wanted to do more than identify improvements in the software I wanted to build and create those solutions. Much to the dismay of my previous employers, I took the leap and found that studying Web Development at Enspiral Dev Academy was the best solution.

Since taking the leap, I have enjoyed working in a team environment and problem solving . I am constantly working on developing my back end development skills. I have found myself gravitating towards front end roles in a team environment mainly because of my strong commercial background in Graphic Design. I also got to see another side of myself by pushing beyond my limits but to also see how others found working with me.

I am a team orientated person who is well spoken, energetic, confident and personable. I enjoy working with people and have had a wide experience working in other countries (including non-english speaking countries)

I’m hoping that with the skills I have obtained will provide me with an interactive learning experience that is challenging and self enhancing.
 </p>

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
