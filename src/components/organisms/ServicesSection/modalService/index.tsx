/** @format */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ModalAnimation } from '../../../animations/ModalAnimation';
import { CardServsProps } from '../cardServs';
import CTAButton from '../../../atoms/ctaBtn';

export default function ModalService(props: CardServsProps) {
	const [show, setShow] = useState(false);

	function handleclick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		1;
		e.preventDefault();
		setShow(!show);
	}
	return (
		<>
			<button
				className='mt-3 hover:shadow-lg  hover:bg-lightSRBlue bg-midSRBlue p-2 rounded text-white font-bold drop-shadow-md transition-all duration-300'
				onClick={(e) => handleclick(e)}>
				Saiba Mais
			</button>

			<motion.div
				variants={ModalAnimation}
				animate={`${show ? 'visible' : 'closed'}`}
				initial='closed'
				className=' bg-white/40 backdrop-blur-sm h-screen transform w-screen overflow-hidden fixed z-50 top-0 left-0 bottom-0 flex mx-auto transition-all duration-300 ease-linear'>
				<div className='bg-white flex flex-col mx-5 lg:w-1/3 lg:h-[54%] m-auto shadow-xl rounded-lg relative z-50 p-5'>
					<button
						onClick={() => setShow(false)}
						className=' w-20 h-20 absolute right-1 top-1 rotate-45 text-6xl text-red-600 hover:scale-110 duration-100 transition-all ease-linear'>
						+
					</button>
					<img
						src={props.img}
						alt={props.title}
						className='w-full object-cover h-44 object-center rounded-md'
					/>
					<div className='mt-3 flex flex-col justify-between h-full'>
						<h3 className='font-bold text-xl text-stone-900'>{props.title}</h3>
						<p className='mt-2 text-base text-stone-800'>{props.description}</p>
						<CTAButton text={'Falar Com Consultor'} />
					</div>
				</div>
			</motion.div>
		</>
	);
}
