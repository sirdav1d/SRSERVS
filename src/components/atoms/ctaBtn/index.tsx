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
				'mailto:Recrutamento@srservicos.com.br?subject=Solicitação de Orçamento&body=Ol%C3%A1!%20Estava%20no%20seu%20site%20e%20preciso%20de%20um%20or%C3%A7amento',
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
				className='p-4 mt-10 tracking-wide transition-all duration-300  ease-linear w-fit rounded  shadow-sm flex items-center gap-3 hover:shadow-xl   bg-bgBtn bg-btnSize bg-center hover:bg-right'
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
