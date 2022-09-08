import React from 'react';
import '../style/home.scss';
import scroll from '../img/scroll.png';
import spiral from '../img/spiral.png';
import rectangle from '../img/rectangle.png';

const Home = () => {
	return (
		<div className="home">
			<h1 className="devInNet">Dev-in-net</h1>
			<p className="description">NOUS DÉVELOPPONS VOS SOLUTIONS NUMERIQUES</p>
			<img className="spiral" src={spiral} alt="" />
			<img className="rectangle" src={rectangle} alt="" />
			<img className="scroll" src={scroll} alt="" />
		</div>
	);
};

export default Home;
