import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => (
  <div className='container'>
    <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
  	<div class="row">
  		<label for="name">Your name:</label><br />
  		<input id="name" class="input" name="name" type="text" value="" size="30" /><br />
  	</div>
  	<div class="row">
  		<label for="email">Your email:</label><br />
  		<input id="email" class="input" name="email" type="text" value="" size="30" /><br />
  	</div>
  	<div class="row">
  		<label for="message">Your message:</label><br />
  		<textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
  	</div>
  	<input id="submit_button" type="submit" value="Send email" />
  </form>						

     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
)

export default Contact
