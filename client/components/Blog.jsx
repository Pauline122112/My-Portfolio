import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => (
  <div className='container'>
   <h1>Pauline's Blog</h1>
   <p>Page is still work in progress</p>
   <p><i>"Have the courage to follow your heart and intuition. They somehow know what you truly want to become"</i></p>
   <p>Steve Jobs</p> <br>
   </br>
   <p> Get your latest on what's going on in Pauline's world</p>

<p> Link to my online portfolio as well</p>
     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
)

export default Blog
