import React, { useState } from 'react';
import '../style/home.scss';
import scroll from '../img/scroll.png';
import spiral from '../img/spiral.png';
import rectangle from '../img/rectangle.png';

const Home = () => {
	window.addEventListener('scroll', () => {
		const scrolled = window.scrollY;

		console.log(scrolled);
	});

	return (
		<div id="home" className="home">
			<h1 className="devInNet">Dev-in-net</h1>
			<p className="description">NOUS DÉVELOPPONS VOS SOLUTIONS NUMERIQUES</p>
			<img className="spiral" src={spiral} alt="" />
			<img className="rectangle" src={rectangle} alt="" />
			<img className="scroll" src={scroll} alt="" />
		</div>
	);
};

export default Home;
