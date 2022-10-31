export const setFirstSurround = () => {
	const surrounded = document.querySelector('.surrounded');
	const sloganDeveloppons = document.querySelector(
		'.container-devinnet__slogan-developpons-appear',
	);
	const sloganInternet = document.querySelector(
		'.container-devinnet__slogan-internet-appear',
	);
	sloganInternet.classList.remove('container-devinnet__slogan-internet-appear');
	sloganInternet.classList.add('container-devinnet__slogan-internet-stop');
	sloganDeveloppons.classList.remove(
		'container-devinnet__slogan-developpons-appear',
	);
	sloganDeveloppons.classList.add(
		'container-devinnet__slogan-developpons-stop',
	);
	surrounded.classList.remove('surrounded-disappear');
	surrounded.classList.add('surrounded-appear');
};
