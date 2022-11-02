import React from 'react';
import '../style/scroll.scss';
import { setScrollAppear } from '../utils/animationHome/setScrollAppear';

const Scroll = ({ scrollBarPosition }) => {
	if (scrollBarPosition < 3000) {
		setTimeout(setScrollAppear, 16000);
	}
	if (scrollBarPosition > 8000) {
		const scroll = document.querySelector('.scroll');
		scroll.classList.add('disappear-scroll');
	}

	return (
		<div className="scroll disappear-scroll">
			<p className="mouse"></p>
			<p className="message">Scroll</p>
		</div>
	);
};

export default Scroll;
