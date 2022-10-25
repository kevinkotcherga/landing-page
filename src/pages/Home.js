import React, { useState } from 'react';
import '../style/home.scss';
import spiral from '../img/spiral.png';
import Scroll from '../components/Scroll';

const Home = () => {
	const [scrollBarPosition, setScrollBarPosition] = useState('');

	window.addEventListener('scroll', event => {
		let scroll = window.scrollY;
		setScrollBarPosition(scroll);
	});

	setTimeout(() => {
		let devinnetDeveloppons = document.querySelector('.devinnet-developpons');
		devinnetDeveloppons.classList.remove('devinnet-developpons');
		devinnetDeveloppons.classList.remove('devinnet-flashes');
		devinnetDeveloppons.classList.add('devinnet-developpons-move');
		let devinnetInternet = document.querySelector('.devinnet-internet');
		devinnetInternet.classList.remove('devinnet-internet');
		devinnetInternet.classList.remove('devinnet-flashes');
		devinnetInternet.classList.add('devinnet-internet-move');
	}, 3000);

	setTimeout(() => {
		let devinnetSlogan = document.querySelector('.devinnet-slogan-disappear');
		devinnetSlogan.classList.add('devinnet-slogan-appear');
		devinnetSlogan.classList.remove('devinnet-slogan-disappear');
	}, 5000);

	return (
		<div id="home" className="home">
			<div
				className={
					scrollBarPosition > 600 && scrollBarPosition < 3050
						? 'rectangle large-rectangle'
						: 'rectangle appear-element'
				}
			>
				<div className="left">
					<div className="devinnet-developpons devinnet-flashes">
						Dev<div className="devinnet-slogan-disappear">eloppons</div>
					</div>
				</div>
				<div className="right"></div>
				<div className="devinnet-internet devinnet-flashes">
					in<div className="devinnet-slogan-disappear">ter</div>net
				</div>
			</div>

			{/* <p
				className={
					scrollBarPosition > 500
						? 'description disappear-element'
						: 'description appear-element'
				}
			>
				<span className="surrounded">Dév</span>eloppons{' '}
				<span className="surrounded">in</span>ter
				<span className="surrounded">net</span>
			</p> */}
			<img
				className={
					scrollBarPosition > 100
						? 'spiral disappear-element'
						: 'spiral appear-element'
				}
				src={spiral}
				alt=""
			/>
			{/* <img
				className={
					scrollBarPosition > 600 && scrollBarPosition < 3050
						? 'rectangle large-rectangle'
						: 'rectangle appear-element'
				}
				src={rectangle}
				alt=""
			/> */}
			<p
				className={
					scrollBarPosition > 650 && scrollBarPosition < 3050
						? 'specialisation-frontend appear-element'
						: 'specialisation-frontend disappear-element'
				}
			>
				Spécialisation Front-end
			</p>
			<p
				className={
					scrollBarPosition > 950 && scrollBarPosition < 2150
						? 'integration appear-element'
						: 'integration disappear-element'
				}
			>
				Intégration web
			</p>
			<p
				className={
					scrollBarPosition > 1250 && scrollBarPosition < 2150
						? 'template-dynamique appear-element'
						: 'template-dynamique disappear-element'
				}
			>
				Templates dynamique
			</p>
			<p
				className={
					scrollBarPosition > 1550 && scrollBarPosition < 2150
						? 'pixel-perfect appear-element'
						: 'pixel-perfect disappear-element'
				}
			>
				Pixel perfect
			</p>
			<p
				className={
					scrollBarPosition > 1850 && scrollBarPosition < 2150
						? 'code-propre appear-element'
						: 'code-propre disappear-element'
				}
			>
				Code propre
			</p>
			<p
				className={
					scrollBarPosition > 2150 && scrollBarPosition < 3050
						? 'experience appear-element'
						: 'experience disappear-element'
				}
			>
				Une équipe passionnés
			</p>
			<p
				className={
					scrollBarPosition > 2450 && scrollBarPosition < 3050
						? 'avec-plus-de appear-element'
						: 'avec-plus-de disappear-element'
				}
			>
				avec plus de
			</p>
			<p
				className={
					scrollBarPosition > 2750 && scrollBarPosition < 3050
						? 'passionnes appear-element'
						: 'passionnes disappear-element'
				}
			>
				10 ans d'experience
			</p>
			<p
				className={
					scrollBarPosition > 3100
						? 'contact appear-element'
						: 'contact disappear-element'
				}
			>
				Wesh la famille
			</p>
			<Scroll scrollBarPosition={scrollBarPosition} />
		</div>
	);
};

export default Home;
