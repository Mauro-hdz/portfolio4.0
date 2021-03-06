import React, { Component } from 'react';
import './style.css';

import Card from '../Card/card';
import Modal from '../Modal/Modal';
//Thumbnails for each project
// import GiphyIMG from './Images/Gif-machine.PNG';
// import ClickyGameIMG from './Images/Pokememory.PNG';
import TradedIMG from './Images/TradED.png';
import SimpleSpot from './Images/Simple-Spot.PNG';
import BookTasticIMG from './Images/Booktastic.PNG';
import ScraperIMG from './Images/Finance-report.PNG';

//Project video
// import Pokememory from './video/Pokememory.mp4';
// import GifMachine from './video/Gif-Machine.mp4';
import TradED from './video/TradED.mp4';
import Simple from './video/SimpleSpot.mp4';
import BookTastic from './video/BookTastic.mp4';
import WorldFinance from './video/World-Finance-Report.mp4';
//Descriptions
import Descriptions from '../../project-description.json';

class Portfolio extends Component {
	state = {
		title: '',
		stack: '',
		video: '',
		projectLink: '',
		codeLink: '',
		description: '',
		modal: false,
	};

	componentDidMount() {
		const portfolio = document.getElementById('portfolio');
		const nav = document.getElementById('nav-list');
		const home = nav.children[0].children[0];
		const about = nav.children[1].children[0];
		const handleScroll = () => {
			const scroll = window.scrollY;
			if (scroll > 100) {
				nav.children[0].children[0].classList.add('highlight-link');
				nav.children[1].children[0].classList.add('highlight-link');
				nav.children[2].children[0].classList.add('highlight-link');
				nav.children[3].children[0].classList.add('highlight-link');
			} else if (scroll < 100) {
				nav.children[0].children[0].classList.remove('highlight-link');
				nav.children[1].children[0].classList.remove('highlight-link');
				nav.children[2].children[0].classList.remove('highlight-link');
				nav.children[3].children[0].classList.remove('highlight-link');
			}
		};
		portfolio.addEventListener('mouseover', () => {
			window.addEventListener('scroll', handleScroll);
		});

		home.addEventListener('click', () => {
			nav.children[0].children[0].classList.remove('highlight-link');
			nav.children[1].children[0].classList.remove('highlight-link');
			nav.children[2].children[0].classList.remove('highlight-link');
			nav.children[3].children[0].classList.remove('highlight-link');
			window.removeEventListener('scroll', handleScroll);
		});

		about.addEventListener('click', () => {
			nav.children[0].children[0].classList.remove('highlight-link');
			nav.children[1].children[0].classList.remove('highlight-link');
			nav.children[2].children[0].classList.remove('highlight-link');
			nav.children[3].children[0].classList.remove('highlight-link');
			window.removeEventListener('scroll', handleScroll);
		});
	}

	modal = (id) => {
		const card = document.getElementById(id);
		const title = card.children[0].children[1].children[0].innerHTML;
		const techStack = card.getAttribute('techStack');
		const video = card.getAttribute('video');
		const description = card.getAttribute('description');
		const projectLink = card.getAttribute('deployedlink');
		const github = card.getAttribute('githublink');
		const navbarLinks = document.getElementById('nav-list');

		navbarLinks.style.display = 'none';
		document.body.style.overflow = 'hidden';

		this.setState({
			title: title,
			stack: techStack,
			video: video,
			projectLink: projectLink,
			codeLink: github,
			description: description,
			modal: true,
		});
	};

	closeModal = () => {
		this.setState({
			modal: false,
		});
		const navbarLinks = document.getElementById('nav-list');
		navbarLinks.style.display = '';
		document.body.style.overflow = '';
	};

	render() {
		return (
			<div id='portfolio' className='grey darken-4'>
				<h2
					id='portfolio-header'
					className='row'
					data-aos='fade-down'
					data-aos-duration='500'
					data-aos-delay='500'
				>
					Check Out My Work
				</h2>
				<hr className='divider' />
				<Modal
					title={this.state.title}
					video={this.state.video}
					project={this.state.projectLink}
					codeLink={this.state.codeLink}
					projectStack={this.state.stack}
					projectDescription={this.state.description}
					open={this.state.modal}
					closeModal={this.closeModal}
				/>
				<div
					id='portfolio-container'
					className='container'
					data-aos='fade-left'
					data-aos-duration='1000'
					data-aos-delay='400'
				>
					<div style={{ marginBottom: 0 }} className='row'>
						<Card
							id={1}
							click={this.modal}
							image={BookTasticIMG}
							video={BookTastic}
							text='Book-Tastic'
							description={Descriptions.booktastic.description}
							tech='React.JS / Node.JS'
							allTech={Descriptions.booktastic.techstack}
							link='https://book-finder2.herokuapp.com/'
							github='https://github.com/Mauro-hdz/book-finder2'
						/>
						<Card
							id={2}
							click={this.modal}
							image={ScraperIMG}
							video={WorldFinance}
							text='World Finance Report'
							description={Descriptions.worldFinanceReport.description}
							tech='Node.JS'
							allTech={Descriptions.worldFinanceReport.techstack}
							link='https://tranquil-denali-preserve-30101.herokuapp.com/'
							github='https://github.com/Mauro-hdz/dollar-scrape'
						/>
						{/* <Card
							id={3}
							click={this.modal}
							image={ClickyGameIMG}
							video={Pokememory}
							text='Pokememory'
							description={Descriptions.pokememory.description}
							tech='React.JS'
							allTech={Descriptions.pokememory.techstack}
							link='https://mauro-hdz.github.io/clicky-pokemonsters/'
							github='https://github.com/Mauro-hdz/clicky-pokemonsters'
						/> */}
						<Card
							id={5}
							click={this.modal}
							image={SimpleSpot}
							video={Simple}
							text='SimpleCRM'
							description={Descriptions.simpleSpot.description}
							tech='React.JS / Python'
							allTech={Descriptions.simpleSpot.techstack}
							link='https://guarded-tor-34996.herokuapp.com/'
							github='https://github.com/Mauro-hdz/simple-hub'
						/>
						<Card
							id={4}
							click={this.modal}
							image={TradedIMG}
							video={TradED}
							text='TradED'
							description={Descriptions.traded.description}
							tech='React.JS'
							allTech={Descriptions.traded.techstack}
							link='https://traded1.herokuapp.com/'
							github='https://github.com/rmathew21/project3'
						/>
						{/* <Card
							id={6}
							click={this.modal}
							image={GiphyIMG}
							video={GifMachine}
							text='GIF Machine'
							description={Descriptions.gifMachine.description}
							tech='Javascript'
							allTech={Descriptions.gifMachine.techstack}
							link='https://mauro-hdz.github.io/giphy-app/'
							github='https://github.com/Mauro-hdz/giphy-app'
						/> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
