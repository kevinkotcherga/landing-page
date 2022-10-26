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

	if (scrollBarPosition < 100) {
		setTimeout(() => {
			let devinnetDeveloppons = document.querySelector('.devinnet-developpons');
			let devinnetInternet = document.querySelector('.devinnet-internet');
			let surrounded = document.querySelector('.surrounded');
			let surrounded2 = document.querySelector('.surrounded-2');
			let surrounded3 = document.querySelector('.surrounded-3');
			devinnetDeveloppons.classList.add('devinnet-developpons-move');
			devinnetDeveloppons.classList.remove(
				'devinnet-developpons',
				'devinnet-flashes',
			);
			devinnetInternet.classList.add('devinnet-internet-move');
			devinnetInternet.classList.remove(
				'devinnet-internet',
				'devinnet-flashes',
			);
			surrounded.classList.add('surrounded-disappear');
			surrounded2.classList.add('surrounded-disappear');
			surrounded3.classList.add('surrounded-disappear');
		}, 3000);

		setTimeout(() => {
			let devinnetSlogan = document.querySelector('.devinnet-slogan-disappear');
			let devinnetDeveloppons = document.querySelector(
				'.devinnet-developpons-move',
			);
			let devinnetInternet = document.querySelector('.devinnet-internet-move');
			devinnetSlogan.classList.add('devinnet-slogan-appear');
			devinnetSlogan.classList.remove('devinnet-slogan-disappear');
			devinnetDeveloppons.classList.add('devinnet-developpons-stop-transition');
			devinnetDeveloppons.classList.remove('devinnet-developpons-move');
			devinnetInternet.classList.add('devinnet-internet-stop-transition');
			devinnetInternet.classList.remove('devinnet-internet-move');
		}, 8000);

		setTimeout(() => {
			let surrounded = document.querySelector('.surrounded');
			surrounded.classList.remove('surrounded-disappear');
			surrounded.classList.add('surrounded-appear');
		}, 10500);

		setTimeout(() => {
			let surrounded2 = document.querySelector('.surrounded-2');
			surrounded2.classList.remove('surrounded-disappear');
			surrounded2.classList.add('surrounded-appear');
		}, 10900);

		setTimeout(() => {
			let surrounded3 = document.querySelector('.surrounded-3');
			surrounded3.classList.remove('surrounded-disappear');
			surrounded3.classList.add('surrounded-appear');
		}, 11300);
	}

	return (
		<div id="home" className="home">
			<div
				className={
					scrollBarPosition > 4000 && scrollBarPosition < 20000
						? 'rectangle large-rectangle'
						: 'rectangle appear-element'
				}
			>
				<div className="top"></div>
				<div className="bottom"></div>
				<div
					className={
						scrollBarPosition > 2000
							? 'left disappear-element'
							: 'left appear-element'
					}
				>
					<div className="devinnet-developpons devinnet-flashes">
						<span className="surrounded">Dev</span>
						<div className="devinnet-slogan-disappear">eloppons</div>
					</div>
				</div>
				<div
					className={
						scrollBarPosition > 2000
							? 'right disappear-element'
							: 'right appear-element'
					}
				>
					<div className="devinnet-internet devinnet-flashes">
						<span className="surrounded-2">in</span>
						<div className="devinnet-slogan-disappear">ter</div>
						<span className="surrounded-3">net</span>
					</div>
				</div>
			</div>
			<img
				className={scrollBarPosition > 100 ? 'spiral-disappear' : 'spiral'}
				src={spiral}
				alt=""
			/>
			<p
				className={
					scrollBarPosition > 5000 && scrollBarPosition < 20000
						? 'specialisation-frontend appear-element'
						: 'specialisation-frontend disappear-element'
				}
			>
				<span className="surrounded-appear">Développement</span> web
			</p>
			<p
				className={
					scrollBarPosition > 7000 && scrollBarPosition < 20000
						? 'integration appear-element'
						: 'integration disappear-element'
				}
			>
				<span className="surrounded-appear">Solutions</span> adaptées
			</p>
			<p
				className={
					scrollBarPosition > 9000 && scrollBarPosition < 20000
						? 'template-dynamique appear-element'
						: 'template-dynamique disappear-element'
				}
			>
				Intégration <span className="surrounded-appear">Web</span>
			</p>
			<p
				className={
					scrollBarPosition > 11000 && scrollBarPosition < 20000
						? 'pixel-perfect appear-element'
						: 'pixel-perfect disappear-element'
				}
			>
				<span className="surrounded-appear">Qualité</span> de code
			</p>

			<p
				className={
					scrollBarPosition > 20000
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
