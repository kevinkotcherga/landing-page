import React, { useState } from 'react';
import '../style/home.scss';
import scroll from '../img/scroll.png';
import spiral from '../img/spiral.png';
import rectangle from '../img/rectangle.png';

const Home = () => {

const [scrollBarPosition, setScrollBarPosition] = useState("");

window.addEventListener("scroll", (event) => {
  let scroll = window.scrollY;
  setScrollBarPosition(scroll)
});

console.log(scrollBarPosition)

	return (
		<div id="home" className="home">
			<h1 className="devinnet">Devinnet</h1>
			<p className={(scrollBarPosition > 100) ? "description disappear-element" : "description appear-element"}>NOUS DÉVELOPPONS VOS SOLUTIONS NUMERIQUES</p>
			<img className={(scrollBarPosition > 100) ? "spiral disappear-element" : "spiral appear-element"} src={spiral} alt="" />
			<img className={(scrollBarPosition > 100) ? "rectangle disappear-element" : "rectangle appear-element"} src={rectangle} alt="" />
      <p className={(scrollBarPosition > 100) ? "specialisation-frontend appear-element" : "specialisation-frontend disappear-element"}>Spécialisation Front-end</p>
      <p className={(scrollBarPosition > 300) ? "integration appear-element" : "integration disappear-element"}>Intégration de qualité</p>
			<img className="scroll" src={scroll} alt="" />
		</div>
	);
};

export default Home;
