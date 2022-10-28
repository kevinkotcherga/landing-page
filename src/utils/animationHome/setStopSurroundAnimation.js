export const setStopSurroundAnimation = () => {
	const surroundedAppear = document.querySelector(
		'.container-devinnet__surrounded-appear',
	);
	surroundedAppear.classList.add('container-devinnet__surrounded-stop');
	surroundedAppear.classList.remove('container-devinnet__surrounded-appear');
};
