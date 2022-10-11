import React from 'react';
import '../style/scroll.scss';

const Scroll = ({ scrollBarPosition }) => {
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
