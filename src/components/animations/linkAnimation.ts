/** @format */

import { Variants } from 'framer-motion';

export const SpanLinkAnimation: Variants = {
	visible: {
		width: '28px',
		opacity: 1,

		x: 0,
		transition: {
			delay: 0.2,
		},
	},
	closed: {
		width: 0,
		opacity: 0,
		x: -20,
	},
};

export const LinkAnimation: Variants = {
	visible: {
		color: '#fdfd00',
		x: 0,
		transition: {
			delay: 0.2,
		},
	},
	closed: {
		x: -20,
	},
};
