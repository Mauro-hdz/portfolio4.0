import React from 'react';
import './style.css';
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
	return (
		<div id='about' className='grey darken-4'>
			<h2 data-aos='zoom-in' data-aos-duration='1000' id='who' className='row'>
				Who Am I?
			</h2>
			<hr className='divider' />
			<div className='container'>
				<div id='about-row-1' className='row'>
					<div id='left' className='col m12 l6 white-text'>
						<h3 id='introduction'>
							<div data-aos='fade-right' data-aos-duration='1000'>
								Hi! I'm Mauricio Hernandez.
							</div>
							<br />
							<div
								data-aos='fade-right'
								data-aos-duration='1000'
								data-aos-delay='500'
							>
								I'm A Software Developer.
							</div>
						</h3>
					</div>
					<div className='col m12 l6'>
						<p
							id='summary'
							className='col s12 white-text left-align'
							data-aos='fade-left'
							data-aos-duration='500'
						>
							<span id='summ-intro'> I am a dedicated software developer</span> that
							takes pride in creating excellent products. I have a real fascination
							for bringing ideas to life. Nothing is more rewarding than seeing the
							final outcome of every brick being layed. I am tailored in some of the
							latest technology to deliver cutting edge results to your screen. All
							the way from Houston, Texas, this developer is ready to serve in all
							areas, from small community projects, to big business. Let's build
							something together.
						</p>
						<i id='right-arrow' className='material-icons large row'>
							<Link className='white-text' to='/portfolio#portfolio'>
								keyboard_arrow_right
							</Link>
						</i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
