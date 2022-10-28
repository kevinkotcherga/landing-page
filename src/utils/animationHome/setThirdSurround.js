export const setThirdSurround = () => {
	const surrounded3 = document.querySelector(
		'.container-devinnet__surrounded-3',
	);
	surrounded3.classList.remove('container-devinnet__surrounded-disappear');
	surrounded3.classList.add('container-devinnet__surrounded-appear');
};
