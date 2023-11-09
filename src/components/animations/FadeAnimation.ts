/** @format */

import { Variants } from 'framer-motion';

export const FadeAnimation: Variants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.4,
			delay: 0.2,
			ease: 'linear',
		},
	},
	closed: {
		opacity: 0,
		x: -40,
	},
};
