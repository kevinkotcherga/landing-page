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
	setTimeout(setSloganInternet, 10000);
	setTimeout(setFirstSurround, 14000);
	setTimeout(setSecondSurround, 14500);
	setTimeout(setThirdSurround, 15000);
	setTimeout(setStopSurroundAnimation, 16000);
};
