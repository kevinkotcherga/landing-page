export const setScrollAppear = () => {
	let scroll = document.querySelector('.scroll');
	scroll.classList.remove('disappear-scroll');
	scroll.classList.add('appear-scroll');
};
