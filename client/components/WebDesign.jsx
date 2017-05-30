import React from 'react'
import { Link } from 'react-router-dom'

const WebDesign = () => (
  <div className='container'>
   <h1>Web Design</h1>
     <Link to='/'>
           <img src='' alt='Home' />
     </Link>

  </div>
  <div className="post clearfix">

				<h2>Web Development Technical Skills:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em><b></b><b></b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
						<li><em>HTML5/CSS3</em></li>
						<li><em>ES5/6/7</em></li>
						<li><em>Creation and migrations</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em><b></b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
              <li><em>Server side rendering</em></li>
              <li><em>Social Login and OAuth</em></li>
              <li><em>SQL</em></li>
                <ul>
  								<li><em><b>*</b>Knex</em></li>
  							</ul>
                <li><em>Authentication</em></li>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Jest</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b></b>Heroku</em></li>
						<li><em><b></b>Webpack</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>
				<div className="skill-item clearfix">
					<h4>Package Manager</h4>
					<ul className="clearfix">
						<li><em><b></b>NPM</em></li>
						<li><em><b></b>Bower</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>
				<div className="skill-item clearfix">
					<h4>Command Line</h4>
					<ul className="clearfix">
						<li><em><b></b>GitHub</em></li>
						<li><em><b></b>Git</em></li>
						<li><em>Zsh</em></li>
						<li><em>Bash</em></li>
						<li><em>Homebrew</em></li>
					</ul>
        </div>
				<div className="skill-item clearfix">
					<h4>Editors</h4>
					<ul className="clearfix">
						<li><em><b></b>Atom</em></li>
						<li><em><b></b>Sublime Text</em></li>
					</ul>
				</div>
				<div className="skill-item clearfix">
					<h4>Dev Tools</h4>
					<ul className="clearfix">
						<li><em><b></b>Debugging</em></li>
					</ul>
				</div>

  			</div>
)

export default WebDesign
