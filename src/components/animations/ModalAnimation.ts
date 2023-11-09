/** @format */

import { Variants } from 'framer-motion';

export const ModalAnimation: Variants = {
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: 'anticipate',
			duration: 0.2,
		},
	},
	closed: {
		opacity: 0,
		scale: 0,
	},
};
