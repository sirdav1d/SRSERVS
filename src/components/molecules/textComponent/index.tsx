/** @format */
'use client';

import { motion } from 'framer-motion';
import {
	SpanHeadLineAnimation,
	HeadLineAnimation,
	SpanTitleAnimation,
	TitleAnimation,
} from '../../animations/TextAnimations';
import { FadeAnimation } from '../../animations/FadeAnimation';
import { BiMedal } from 'react-icons/bi';

type TitleProps = {
	role: string;
	text: string;
	paragraph?: string;
};

export default function TextComponent({ role, text, paragraph }: TitleProps) {
	if (role === 'Headline') {
		return (
			<>
				<div className='flex items-center gap-3'>
					<motion.span
						variants={SpanHeadLineAnimation}
						animate='visible'
						initial='closed'
						className='w-1 bg-lightSRBlue shadow-titleShadow rounded-full'
					/>
					<motion.h1
						variants={HeadLineAnimation}
						animate='visible'
						initial='closed'
						className='font-bold text-2xl lg:text-4xl'>
						{text}
					</motion.h1>
				</div>
				<motion.p
					variants={FadeAnimation}
					initial='closed'
					animate='visible'
					className='text-md lg:text-lg font-medium text-white/90'>
					{paragraph}
				</motion.p>
			</>
		);
	}

	if (role === 'cta') {
		return (
			<div className='flex gap-8 flex-col w-full'>
				<div className='flex items-center gap-4'>
					<motion.span
						variants={SpanHeadLineAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='w-1 bg-lightSRBlue shadow-titleShadow rounded-full'
					/>
					<motion.h2
						variants={HeadLineAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='font-bold text-2xl lg:text-4xl max-w-md'>
						{text}
					</motion.h2>
				</div>
				<motion.p
					variants={FadeAnimation}
					initial='closed'
					whileInView='visible'
					viewport={{ amount: 0.9, once: true }}
					className='text-lg lg:text-xl  text-stone-800 max-w-lg'>
					{paragraph}
				</motion.p>
			</div>
		);
	}

	if (role === 'title') {
		return (
			<div className='flex gap-5 lg:gap-20 items-start flex-col lg:flex-row'>
				<div className='text-stone-950 flex w-full items-center gap-3'>
					<motion.span
						variants={SpanTitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='w-1 bg-lightSRBlue shadow-titleShadow rounded-full'
					/>
					<motion.h2
						variants={TitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='font-bold lg:text-2xl max-w-md text-lg'>
						{text}
					</motion.h2>
				</div>
				<motion.p
					variants={FadeAnimation}
					initial='closed'
					whileInView='visible'
					viewport={{ amount: 0.9, once: true }}
					className='lg:text-lg text-sm text-stone-800 w-full'>
					{paragraph}
				</motion.p>
			</div>
		);
	}

	if (role === 'clean') {
		return (
			<div className='flex flex-col gap-3 lg:gap-5 items-start'>
				<div className='text-stone-950 flex w-full items-center gap-3'>
					<motion.span
						variants={SpanTitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='w-1 bg-lightSRBlue shadow-titleShadow rounded-full'
					/>
					<motion.h2
						variants={TitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='font-bold text-lg lg:text-2xl'>
						{text}
					</motion.h2>
				</div>
				<motion.p
					variants={FadeAnimation}
					initial='closed'
					whileInView='visible'
					viewport={{ amount: 0.9, once: true }}
					className='lg:text-lg text-sm text-stone-800 w-full'>
					{paragraph}
				</motion.p>
				<div className='flex mt-5 lg:mt-10 gap-5 flex-col lg:flex-row'>
					<div className='flex flex-col lg:gap-5 gap-1  '>
						<motion.h3
							variants={FadeAnimation}
							initial='closed'
							whileInView='visible'
							viewport={{ amount: 0.9, once: true }}
							className='font-bold text-stone-900 text-lg lg:text-xl'>
							Impressão Positiva
						</motion.h3>
						<motion.p
							variants={FadeAnimation}
							initial='closed'
							whileInView='visible'
							viewport={{ amount: 0.9, once: true }}
							className=' text-stone-800 lg:text-base text-sm'>
							Uma área limpa e bem conservada cria uma impressão positiva nos
							clientes, visitantes e parceiros de negócios, reforçando a
							reputação da empresa.
						</motion.p>
					</div>
					<div className='flex flex-col lg:gap-5 gap-1  '>
						<motion.h3
							variants={FadeAnimation}
							initial='closed'
							whileInView='visible'
							viewport={{ amount: 0.9, once: true }}
							className='font-bold text-stone-900 text-lg lg:text-xl'>
							Foco no Core Business
						</motion.h3>
						<motion.p
							variants={FadeAnimation}
							initial='closed'
							whileInView='visible'
							viewport={{ amount: 0.9, once: true }}
							className=' text-stone-800 lg:text-base text-sm'>
							Terceirizar serviços de limpeza e conservação permite que as
							empresas se concentrem em suas atividades principais, economizando
							tempo e recursos
						</motion.p>
					</div>
				</div>
			</div>
		);
	}

	if (role === 'security') {
		return (
			<div className='flex flex-col gap-3  lg:gap-5 items-start'>
				<div className='text-stone-950 flex w-full items-center gap-3'>
					<motion.span
						variants={SpanTitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='w-1 bg-lightSRBlue shadow-titleShadow rounded-full'
					/>
					<motion.h2
						variants={TitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='font-bold text-lg lg:text-2xl'>
						{text}
					</motion.h2>
				</div>
				<motion.p
					variants={FadeAnimation}
					initial='closed'
					whileInView='visible'
					viewport={{ amount: 0.9, once: true }}
					className='text-sm lg:text-lg text-stone-800 w-full'>
					{paragraph}
				</motion.p>
			</div>
		);
	}

	if (role === 'teamWork') {
		const benefits = [
			'Recrutamento Estratégico de Funcionários',
			'Treinamento Contínuo para sua Equipe',
			'Aumento da Qualidade e Produtividade',
			'Gerenciamento Eficiente dos Encargos Sociais',
			'Redução de Custos',
			'Fornecimento de Uniformes e Benefícios',
			'Supervisão Constante'
		];
		return (
			<div className='flex flex-col  gap-5 items-start'>
				<div className='text-stone-950 flex w-full items-center gap-3'>
					<motion.span
						variants={SpanTitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='w-1 bg-lightSRBlue shadow-titleShadow rounded-full'
					/>
					<motion.h2
						variants={TitleAnimation}
						whileInView='visible'
						viewport={{ amount: 0.9, once: true }}
						initial='closed'
						className='font-bold text-lg lg:text-2xl max-w-sm'>
						{text}
					</motion.h2>
				</div>
				<motion.p
					variants={FadeAnimation}
					initial='closed'
					whileInView='visible'
					viewport={{ amount: 0.9, once: true }}
					className='text-base lg:text-lg text-stone-800 w-full'>
					{paragraph}
				</motion.p>
				<div className='flex mt-10 gap-5 '>
					<ul className='flex flex-col gap-3  '>
						{benefits.map((benefit, index) => {
							return (
								<li
									className='text-sm lg:text-lg font-bold text-stone-600 '
									key={index}>
									<div className='flex gap-3'>
										<BiMedal
											size={24}
											className='text-lightSRBlue animate-pulse'
										/>
										{benefit}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
