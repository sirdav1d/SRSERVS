/** @format */

import { Variants } from 'framer-motion';

export const HeadLineAnimation: Variants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'linear',
		},
	},
	closed: {
		opacity: 0,
		x: -40,
	},
};

export const TitleAnimation: Variants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'linear',
		},
	},
	closed: {
		opacity: 0,
		x: -40,
	},
};

export const SpanHeadLineAnimation: Variants = {
	visible: {
		opacity: 1,
		height: '120px',
		transition: {
			duration: 0.6,
			delay: 1.2,
			ease: 'linear',
		},
	},
	closed: {
		opacity: 0,
		height: 0,
	},
};


export const SpanTitleAnimation: Variants = {
	visible: {
		opacity: 1,
		height: '80px',
		transition: {
			duration: 0.6,
			delay: 1.2,
			ease: 'linear',
		},
	},
	closed: {
		opacity: 0,
		height: 0,
	},
};
