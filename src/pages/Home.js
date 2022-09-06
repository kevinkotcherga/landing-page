import React from 'react';
import '../style/home.scss';
import scroll from '../img/scroll.png';

const Home = () => {
	return (
		<div className="home">
			<h1 className="devInNet">Dev-in-net</h1>
			<p className="description">NOUS DÉVELOPPONS VOS SOLUTIONS NUMERIQUES</p>
			<img className="scroll" src={scroll} />
		</div>
	);
};

export default Home;
