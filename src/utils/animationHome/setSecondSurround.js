export const setSecondSurround = () => {
	const surrounded2 = document.querySelector(
		'.container-devinnet__surrounded-2',
	);
	surrounded2.classList.remove('container-devinnet__surrounded-disappear');
	surrounded2.classList.add('container-devinnet__surrounded-appear');
};
