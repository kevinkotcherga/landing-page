import React from 'react';
import '../style/scroll.scss';

const Scroll = ({ scrollBarPosition }) => {
	setTimeout(() => {
		let scroll = document.querySelector('.scroll');
		scroll.classList.remove('disappear-element');
		scroll.classList.add('appear-element');
	}, 13000);

	return (
		<div
			className={
				scrollBarPosition < 600
					? 'scroll disappear-element'
					: 'scroll disappear-element'
			}
		>
			<p className="mouse"></p>
			<p className="message">Scroll</p>
		</div>
	);
};

export default Scroll;
