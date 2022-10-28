import { setFirstSurround } from './setFirstSurround';
import { setLogo } from './setLogo';
import { setSecondSurround } from './setSecondSurround';
import { setSloganDeveloppons } from './setSloganDeveloppons';
import { setSloganInternet } from './setSloganInternet';
import { setStopSurroundAnimation } from './setStopSurroundAnimation';
import { setThirdSurround } from './setThirdSurround';

export const setAnimationHome = () => {
	setTimeout(setLogo, 3000);
	setTimeout(setSloganDeveloppons, 9000);
	setTimeout(setSloganInternet, 11000);
	setTimeout(setFirstSurround, 14500);
	setTimeout(setSecondSurround, 15000);
	setTimeout(setThirdSurround, 15500);
	setTimeout(setStopSurroundAnimation, 16500);
};
