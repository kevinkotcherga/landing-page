export const setSloganInternet = () => {
	const sloganInternet = document.querySelector(
		'.container-devinnet__slogan-internet-disappear',
	);
	sloganInternet.classList.remove(
		'container-devinnet__slogan-internet-disappear',
	);
	sloganInternet.classList.add('container-devinnet__slogan-internet-appear');
};
