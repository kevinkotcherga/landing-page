import React, { useState } from 'react';
import '../style/home.scss';
import spiral from '../img/spiral.png';
import Scroll from '../components/Scroll';
import { setAnimationHome } from '../utils/animationHome/setAnimationHome';

const Home = () => {
	const [scrollBarPosition, setScrollBarPosition] = useState('');

	window.addEventListener('scroll', event => {
		let scroll = window.scrollY;
		setScrollBarPosition(scroll);
	});

	// PAGE 1

	if (scrollBarPosition < 1000) {
		setAnimationHome();
	}

	// PAGE 2

	// if (scrollBarPosition > 6000) {
	// 	let slogan = document.querySelector('#slogan');
	// 	slogan.classList.remove('disappear-element');
	// 	slogan.classList.add('slogan', 'appear-element');
	// }
	// if (scrollBarPosition > 8000) {
	// 	let slogan = document.querySelector('#slogan');
	// 	slogan.classList.remove('slogan');
	// 	slogan.classList.add('slogan-move');
	// }

	return (
		<div className="main-container">
			{/* PAGE 1 */}
			<div
				className={
					scrollBarPosition > 5000
						? 'home__rectangle home__large-rectangle'
						: 'home__rectangle appear-element'
				}
			>
				<div className="flex-center">
					<div
						className={
							scrollBarPosition > 3000
								? 'container-devinnet--large disappear-element'
								: 'container-devinnet flashing-text appear-element'
						}
					>
						<div className="container-devinnet__part-developpons">
							<span className="container-devinnet__surrounded">Dev</span>
							<div className="container-devinnet__slogan-developpons-disappear">
								eloppons
							</div>
						</div>
						<div className="container-devinnet__part-internet">
							<span className="container-devinnet__surrounded-2">in</span>
							<div className="container-devinnet__slogan-internet-disappear">
								ter
							</div>
							<span className="container-devinnet__surrounded-3">net</span>
						</div>
					</div>
				</div>
			</div>

			<img
				className={scrollBarPosition > 1000 ? 'spiral-disappear' : 'spiral'}
				src={spiral}
				alt=""
			/>
			{/* PAGE 2 */}
			{/* <div className="slogan-container">
				<div className="slogan-container__box-1">
					<p className="slogan-container__box-1-slogan">
						<span className="surrounded-slogan">Développement</span>{' '}
						<span className="">web</span>
						<span className="display-none">de</span>
					</p>
				</div>
				<div className="slogan-container__box-2">
					<p className="slogan-container__box-2-slogan">
						<span className="surrounded-slogan">Solutions</span>{' '}
						<span className="">adaptées</span>
					</p>
				</div>
				<div className="slogan-container__box-3">
					<p className="slogan-container__box-3-slogan">
						<span className="">Intégration</span> <span className="">Web</span>
						<span className="display-none">de</span>
					</p>
				</div>
				<div className="slogan-container__box-4">
					<p className="slogan-container__box-4-slogan">
						<span className="">Qualité</span> <span className="">de code</span>
					</p>
				</div>
			</div> */}
			<p
				className={
					scrollBarPosition > 20000
						? 'contact appear-element'
						: 'contact disappear-element'
				}
			>
				Contact
			</p>
			<Scroll scrollBarPosition={scrollBarPosition} />
		</div>
	);
};

export default Home;
