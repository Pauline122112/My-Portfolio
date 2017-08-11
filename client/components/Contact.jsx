import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => (
  <div className='container'>
    <form action="/action_page.php">
      <label for="fname">First Name</label>
         <input type="text" id="fname" name="firstname" placeholder="Your name..">

         <label for="lname">Last Name</label>
         <input type="text" id="lname" name="lastname" placeholder="Your last name..">

         <label for="country">Country</label>
         <select id="country" name="country">
           <option value="australia">Australia</option>
           <option value="canada">Canada</option>
           <option value="usa">USA</option>
         </select>

     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
)

export default Contact
