/** @format */
'use client';

import { motion } from 'framer-motion';
import { BiSolidNavigation } from 'react-icons/bi';
import { FadeAnimation } from '../../animations/FadeAnimation';

interface BTNPropos {
	text: string;
	apiCall?: string;
}

export default function CTAButton({ text, apiCall = '#' }: BTNPropos) {
	return (
		<>
			<motion.a
				variants={FadeAnimation}
				animate='visible'
				initial='closed'
				className='p-4 mt-10 transition-all duration-300  ease-linear w-fit rounded  shadow-sm flex items-center gap-3 hover:shadow-xl   bg-bgBtn bg-btnSize bg-center hover:bg-right'
				href={apiCall}
				target='_blank'
				rel='noopener noreferrer'>
				<h4 className='font-bold text-base text-white'>{text}</h4>
				<BiSolidNavigation
					color={'white'}
					size={24}
				/>
			</motion.a>
		</>
	);
}
