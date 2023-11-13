/** @format */
'use client';

import { motion } from 'framer-motion';
import { BiSolidNavigation } from 'react-icons/bi';
import { FadeAnimation } from '../../animations/FadeAnimation';

interface BTNPropos {
	text: string;
}

export default function CTAButton({ text }: BTNPropos) {
	const handleClick = () => {
		try {
			window.open(
				'mailto:guilherme@srservicos.com.br?subject=Solicita%C3%A7%C3%A3o+de+Or%C3%A7amento&body=Ol%C3%A1,+estava+no+seu+site+e+gostaria+de+um+or%C3%A7amento',
				'_blank',
			);
			console.log('clicando');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<motion.button
				variants={FadeAnimation}
				animate='visible'
				initial='closed'
				className='p-4 mt-10 transition-all duration-300  ease-linear w-fit rounded  shadow-sm flex items-center gap-3 hover:shadow-xl   bg-bgBtn bg-btnSize bg-center hover:bg-right'
				onClick={() => handleClick()}
				rel='noopener noreferrer'>
				<h4 className='font-bold text-base text-white'>{text}</h4>
				<BiSolidNavigation
					color={'white'}
					size={24}
				/>
			</motion.button>
		</>
	);
}
