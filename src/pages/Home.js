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

	if (scrollBarPosition > 4000) {
		let containerDevinnet = document.querySelector('.container-devinnet');
		// containerDevinnet.classList.remove('container-devinnet');
		containerDevinnet.classList.add('display-none');
	}

	// PAGE 2

	if (scrollBarPosition > 14000) {
		let sloganWeb = document.querySelector('.slogan-element-web');
		let sloganAdaptees = document.querySelector('.slogan-element-adaptees');
		let sloganIntegration = document.querySelector(
			'.slogan-element-integration',
		);
		let sloganDe = document.querySelector('.slogan-element-de');
		let sloganCode = document.querySelector('.slogan-element-code');

		sloganWeb.classList.add('slogan-element-disappear');
		sloganAdaptees.classList.add('slogan-element-disappear');
		sloganIntegration.classList.add('slogan-element-disappear');
		sloganDe.classList.add('slogan-element-disappear');
		sloganCode.classList.add('slogan-element-disappear');

		let sloganDisappear = document.querySelectorAll(
			'.preposition-element-disappear',
		);

		sloganDisappear.forEach(function (slogan) {
			slogan.classList.remove('preposition-element-disappear');
			slogan.classList.add('preposition-element-appear');
		});

		const firstSlogan = document.querySelector(
			'.slogan-container__box-1-slogan',
		);
		const secondSlogan = document.querySelector(
			'.slogan-container__box-2-slogan',
		);
		const thirdSlogan = document.querySelector(
			'.slogan-container__box-3-slogan',
		);
		const fourthSlogan = document.querySelector(
			'.slogan-container__box-4-slogan',
		);
		firstSlogan.classList.add('slogan-container__box-1-slogan-move');
		secondSlogan.classList.add('slogan-container__box-2-slogan-move');
		thirdSlogan.classList.add('slogan-container__box-3-slogan-move');
		fourthSlogan.classList.add('slogan-container__box-4-slogan-move');
	}
	// else {
	// 	let sloganAppear = document.querySelectorAll('.slogan-element-appear');

	// 	sloganAppear.forEach(function (slogan) {
	// 		slogan.classList.remove('slogan-element-disappear');
	// 		slogan.classList.add('slogan-element-appear');
	// 	});

	// 	const firstSlogan = document.querySelector(
	// 		'.slogan-container__box-1-slogan',
	// 	);
	// 	const secondSlogan = document.querySelector(
	// 		'.slogan-container__box-2-slogan',
	// 	);
	// 	const thirdSlogan = document.querySelector(
	// 		'.slogan-container__box-3-slogan',
	// 	);
	// 	const fourthSlogan = document.querySelector(
	// 		'.slogan-container__box-4-slogan',
	// 	);
	// 	firstSlogan.classList.remove('slogan-container__box-1-slogan-move');
	// 	secondSlogan.classList.remove('slogan-container__box-2-slogan-move');
	// 	thirdSlogan.classList.remove('slogan-container__box-3-slogan-move');
	// 	fourthSlogan.classList.remove('slogan-container__box-4-slogan-move');
	// 	firstSlogan.classList.add('slogan-container__box-1-slogan');
	// 	secondSlogan.classList.add('slogan-container__box-2-slogan');
	// 	thirdSlogan.classList.add('slogan-container__box-3-slogan');
	// 	fourthSlogan.classList.add('slogan-container__box-4-slogan');
	// }

	return (
		<div className="main-container">
			{/* PAGE 1 */}
			<div
				className={
					scrollBarPosition > 5000 && scrollBarPosition < 17000
						? 'home__rectangle home__large-rectangle'
						: 'home__rectangle appear-element'
				}
			>
				<div
					className={
						scrollBarPosition > 3000 && scrollBarPosition < 18000
							? 'flex-center disappear-element'
							: 'flex-center appear-element'
					}
				>
					<div className="container-devinnet flashing-text">
						<div className="container-devinnet__part-developpons appear-element">
							<span className="surrounded">Dev</span>
							<div className="container-devinnet__slogan-developpons-disappear">
								eloppons
							</div>
						</div>
						<div className="container-devinnet__part-internet">
							<span className="surrounded-2">in</span>
							<div className="container-devinnet__slogan-internet-disappear">
								ter
							</div>
							<span className="surrounded-3">net</span>
						</div>
					</div>
					<div
						className={
							scrollBarPosition > 18000
								? 'contact appear-element'
								: 'contact disappear-element display-none'
						}
					>
						<div className="contact__start-talk">Démarons la discussion</div>
						<div className="contact__find-out-more">En savoir plus</div>
					</div>
				</div>
			</div>

			<img
				className={scrollBarPosition > 1000 ? 'spiral-disappear' : 'spiral'}
				src={spiral}
				alt=""
			/>
			{/* PAGE 2 */}
			<div
				className={
					scrollBarPosition > 16000
						? 'slogan-container disappear-element'
						: 'slogan-container appear-element'
				}
			>
				<div className="slogan-container__box-1">
					<p
						className={
							scrollBarPosition > 6000
								? 'slogan-container__box-1-slogan appear-element'
								: 'slogan-container__box-1-slogan disappear-element'
						}
					>
						<span className="margin-slogan surrounded-appear">
							Développement
						</span>
						<span className="slogan-element-web">web</span>
						<span className="preposition-element-disappear margin-slogan">
							de
						</span>
					</p>
				</div>
				<div className="slogan-container__box-2">
					<p
						className={
							scrollBarPosition > 8000
								? 'slogan-container__box-2-slogan appear-element'
								: 'slogan-container__box-2-slogan disappear-element'
						}
					>
						<span className="margin-slogan surrounded-appear">Solutions</span>
						<span className="slogan-element-adaptees">adaptées</span>
					</p>
				</div>
				<div className="slogan-container__box-3">
					<p
						className={
							scrollBarPosition > 10000
								? 'slogan-container__box-3-slogan appear-element'
								: 'slogan-container__box-3-slogan disappear-element'
						}
					>
						<span className="slogan-element-integration margin-slogan">
							Intégration
						</span>
						<span className="surrounded-appear margin-slogan">Web</span>
						<span className="preposition-element-disappear margin-slogan">
							de
						</span>
					</p>
				</div>
				<div className="slogan-container__box-4">
					<p
						className={
							scrollBarPosition > 12000
								? 'slogan-container__box-4-slogan appear-element'
								: 'slogan-container__box-4-slogan disappear-element'
						}
					>
						<span className="margin-slogan surrounded-appear">Qualité</span>
						<span className="margin-slogan slogan-element-de">de</span>
						<span className="slogan-element-code">code</span>
					</p>
				</div>
			</div>

			<Scroll scrollBarPosition={scrollBarPosition} />
		</div>
	);
};

export default Home;
