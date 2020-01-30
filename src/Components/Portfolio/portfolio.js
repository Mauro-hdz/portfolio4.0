import React, { Component } from 'react';
import './style.css';
import Card from '../Card/card';
import Modal from '../Modal/Modal';
//Thumbnails for each project
import ClickyGameIMG from './Images/clicky-game-zoom.png';
import GiphyIMG from './Images/GIPHY.png';
import ScraperIMG from './Images/Dollar-Scrape.PNG';
import TradedIMG from './Images/TradED.png';
import PowerListIMG from './Images/power-list.PNG';
import BookTasticIMG from './Images/Book-Finder2-screenshot.jpg';
//Project video
import Pokememory from './video/Pokememory.mp4';
import BookTastic from './video/BookTastic.mp4';
import WorldFinance from './video/World-Finance-Report.mp4';
import TradED from './video/TradED.mp4';
import GifMachine from './video/GIF-Demo.mp4';
import PowerList from './video/Power-List.mp4';
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
        modal: false
    };

    modal = (id) => {
        //We need the following things:
        //techStack-done
        document.body.style.position = 'auto';
        document.body.style.overflow = 'hidden';
        const card = document.getElementById(id);
        const title = card.children[0].children[1].children[0].innerHTML;
        const techStack = card.getAttribute('techStack');
        const video = card.getAttribute('video');
        const description = card.getAttribute('description');
        const projectLink = card.getAttribute('deployedlink');
        const github = card.getAttribute('githublink');
        this.setState({
            title: title,
            stack: techStack,
            video: video,
            projectLink: projectLink,
            codeLink: github,
            description: description,
            modal: true
        });
    };

    closeModal = () => {
        this.setState({
            modal: false
        });
		document.body.style.overflow = '';
	};

    render() {
        return (
            <div id="portfolio" className="grey darken-4">
                <h2 id="portfolio-header" className="row" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">Check Out My Work</h2>
                <hr className="divider" />
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
                <div id="portfolio-container" className="container row" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                    <Card
                    id={1}
                    click={this.modal}
                    image={BookTasticIMG}
                    video={BookTastic}
                    text="Book-Tastic"
                    description={Descriptions.booktastic.description}
                    tech="React.JS"
                    allTech={Descriptions.booktastic.techstack}
                    link="https://book-finder2.herokuapp.com/"
                    github="https://github.com/CaptainHdz/book-finder2"
                    />                 
                    <Card
                    id={2}
                    click={this.modal}
                    image={ScraperIMG}
                    video={WorldFinance}
                    text="World Finance Report"
                    description={Descriptions.worldFinanceReport.description}
                    tech="Node.JS"
                    allTech={Descriptions.worldFinanceReport.techstack}
                    link="https://tranquil-denali-preserve-30101.herokuapp.com/"
                    github="https://github.com/CaptainHdz/dollar-scrape"
                    />
                    <Card
                    id={3}
                    click={this.modal}
                    image={ClickyGameIMG}
                    video={Pokememory}
                    text="Pokememory"
                    description={Descriptions.pokememory.description}
                    tech="React.JS"
                    allTech={Descriptions.pokememory.techstack}
                    link="https://captainhdz.github.io/clicky-pokemonsters/"
                    github="https://github.com/CaptainHdz/clicky-pokemonsters"
                    />
                    <Card
                    id={4}
                    click={this.modal}
                    image={TradedIMG}
                    video={TradED}
                    text="TradED"
                    description={Descriptions.traded.description}
                    tech="React.JS"
                    allTech={Descriptions.traded.techstack}
                    link="https://traded1.herokuapp.com/"
                    github="https://github.com/rmathew21/project3"
                    />
                    <Card
                    id={5}
                    click={this.modal}
                    image={PowerListIMG}
                    video={PowerList}
                    text="The Power List"
                    description={Descriptions.powerList.description}
                    tech="React.JS"
                    allTech={Descriptions.powerList.techstack}
                    link="https://obscure-shelf-60013.herokuapp.com/"
                    github="https://github.com/CaptainHdz/power-list"
                    />
                    <Card
                    id={6}
                    click={this.modal}
                    image={GiphyIMG}
                    video={GifMachine}
                    text="GIF Machine"
                    description={Descriptions.gifMachine.description}
                    tech="Javascript"
                    allTech={Descriptions.gifMachine.techstack}
                    link="https://captainhdz.github.io/giphy-app/"
                    github="https://github.com/CaptainHdz/giphy-app"
                    />                            
                </div>
            </div>
        )
    }
};

export default Portfolio;