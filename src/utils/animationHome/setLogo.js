export const setLogo = () => {
	const containerDevinnet = document.querySelector('.container-devinnet');
	const devinnetDeveloppons = document.querySelector(
		'.container-devinnet__part-developpons',
	);
	const devinnetInternet = document.querySelector(
		'.container-devinnet__part-internet',
	);
	let surrounded = document.querySelector('.container-devinnet__surrounded');
	let surrounded2 = document.querySelector('.container-devinnet__surrounded-2');
	let surrounded3 = document.querySelector('.container-devinnet__surrounded-3');
	containerDevinnet.classList.add('container-devinnet--large');
	containerDevinnet.classList.remove('flashing-text');
	devinnetDeveloppons.classList.add(
		'container-devinnet__part-developpons-move',
	);
	devinnetInternet.classList.add('container-devinnet__part-internet-move');
	surrounded.classList.add('container-devinnet__surrounded-disappear');
	surrounded2.classList.add('container-devinnet__surrounded-disappear');
	surrounded3.classList.add('container-devinnet__surrounded-disappear');
};
