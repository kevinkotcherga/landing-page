import React from 'react';
import '../style/scroll.scss';
import { setScrollAppear } from '../utils/animationHome/setScrollAppear';

const Scroll = ({ scrollBarPosition }) => {
	setTimeout(setScrollAppear, 16000);

	return (
		<div
			className={
				scrollBarPosition < 7000
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
