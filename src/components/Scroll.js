import React from 'react';
import '../style/scroll.scss';

const Scroll = ({ scrollBarPosition }) => {
	setTimeout(() => {
		let scroll = document.querySelector('.scroll');
		scroll.classList.remove('scroll');
		scroll.classList.add('scroll');
	}, 3000);

	return (
		<div
			className={
				scrollBarPosition < 600
					? 'scroll appear-element'
					: 'scroll disappear-element'
			}
		>
			<p className="mouse"></p>
			<p className="message">Scroll</p>
		</div>
	);
};

export default Scroll;
