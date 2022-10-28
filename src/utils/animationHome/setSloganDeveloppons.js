export const setSloganDeveloppons = () => {
	const sloganDeveloppons = document.querySelector(
		'.container-devinnet__slogan-developpons-disappear',
	);
	const sloganDevelopponsMove = document.querySelector(
		'.container-devinnet__part-developpons-move',
	);
	const sloganInternetMove = document.querySelector(
		'.container-devinnet__part-internet-move',
	);
	sloganInternetMove.classList.remove('container-devinnet__part-internet-move');
	sloganInternetMove.classList.add('container-devinnet__part-internet-stop');
	sloganDevelopponsMove.classList.remove(
		'container-devinnet__part-developpons-move',
	);
	sloganDevelopponsMove.classList.add(
		'container-devinnet__part-developpons-stop',
	);
	sloganDeveloppons.classList.remove(
		'container-devinnet__slogan-developpons-disappear',
	);
	sloganDeveloppons.classList.add(
		'container-devinnet__slogan-developpons-appear',
	);
};
