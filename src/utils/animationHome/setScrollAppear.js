export const setScrollAppear = () => {
	let scroll = document.querySelector('.scroll');
	scroll.classList.remove('disappear-element');
	scroll.classList.add('appear-element');
};
