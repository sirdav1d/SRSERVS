/** @format */
import { useState } from 'react';
import logo from '../../../assets/logoSRServs.webp';
import Link from '../../atoms/link';
import WPPButton from '../../atoms/wppBtn';
import { motion } from 'framer-motion';
import { SpanLinkAnimation } from '../../animations/linkAnimation';

export default function Navbar() {
	const [show, setShow] = useState('home');
	return (
		<div className=' backdrop-blur-md fixed max-w-screen w-full z-50 bg-white/90 drop-shadow-md'>
			<div className='max-w-[1280px] p-5 mx-3 lg:mx-14 xl:mx-auto flex  justify-between items-center '>
				<a href='/'>
					<img
						className='w-28  backdrop-filter drop-shadow-logoShadow -translate-x-6'
						src={logo}
						alt='logo SR Serviços'
						width={'100%'}
						height={'100%'}
					/>
				</a>

				<nav className='hidden lg:block'>
					<ul className='flex gap-4 font-bold text-lg '>
						<motion.li
							onClick={() => setShow('home')}
							className={` flex flex-col hover:text-lightSRBlue  ${
								show === 'home' ? 'text-lightSRBlue' : 'text-stone-800'
							}`}>
							<Link
								anchor={`#home`}
								text={'Home'}
							/>
							<motion.span
								variants={SpanLinkAnimation}
								animate={show === 'home' ? 'visible' : 'closed'}
								exit={'closed'}
								initial='closed'
								className='h-[2px] bg-lightSRBlue rounded-full drop-shadow-iconShadow'
							/>
						</motion.li>
						<motion.li
							onClick={() => setShow('who')}
							className={` flex flex-col hover:text-lightSRBlue  ${
								show === 'who' ? 'text-lightSRBlue' : 'text-stone-800'
							}`}>
							<Link
								anchor={`#who`}
								text={'Quem Somos'}
							/>
							<motion.span
								variants={SpanLinkAnimation}
								animate={show === 'who' ? 'visible' : 'closed'}
								exit={'closed'}
								initial='closed'
								className='h-[2px] bg-lightSRBlue rounded-full drop-shadow-iconShadow'
							/>
						</motion.li>
						<motion.li
							onClick={() => setShow('servs')}
							className={` flex flex-col hover:text-lightSRBlue  ${
								show === 'servs' ? 'text-lightSRBlue' : 'text-stone-800'
							}`}>
							<Link
								anchor={`#servs`}
								text={'Serviços'}
							/>
							<motion.span
								variants={SpanLinkAnimation}
								animate={show === 'servs' ? 'visible' : 'closed'}
								exit={'closed'}
								initial='closed'
								className='h-[2px] bg-lightSRBlue rounded-full drop-shadow-iconShadow'
							/>
						</motion.li>
						<motion.li
							onClick={() => setShow('clients')}
							className={` flex flex-col hover:text-lightSRBlue   ${
								show === 'clients' ? 'text-lightSRBlue' : 'text-stone-800'
							}`}>
							<Link
								anchor={`#clients`}
								text={'Parceiros'}
							/>
							<motion.span
								variants={SpanLinkAnimation}
								animate={show === 'clients' ? 'visible' : 'closed'}
								exit={'closed'}
								initial='closed'
								className='h-[2px] bg-lightSRBlue rounded-full drop-shadow-iconShadow'
							/>
						</motion.li>
						<motion.li
							onClick={() => setShow('benefits')}
							className={` flex flex-col hover:text-lightSRBlue  ${
								show === 'benefits' ? 'text-lightSRBlue' : 'text-stone-800'
							}`}>
							<Link
								anchor={`#benefits`}
								text={'Benefícios'}
							/>
							<motion.span
								variants={SpanLinkAnimation}
								animate={show === 'benefits' ? 'visible' : 'closed'}
								exit={'closed'}
								initial='closed'
								className='h-[2px] bg-lightSRBlue rounded-full drop-shadow-iconShadow'
							/>
						</motion.li>
						<motion.li
							onClick={() => setShow('contact')}
							className={` flex flex-col hover:text-lightSRBlue   ${
								show === 'contact' ? 'text-lightSRBlue' : 'text-stone-800'
							}`}>
							<Link
								anchor={`#contact`}
								text={'Contato'}
							/>
							<motion.span
								variants={SpanLinkAnimation}
								animate={show === 'contact' ? 'visible' : 'closed'}
								exit={'closed'}
								initial='closed'
								className='h-[2px] bg-lightSRBlue rounded-full drop-shadow-iconShadow'
							/>
						</motion.li>
					</ul>
				</nav>
				<WPPButton apiCall='https://wa.me/5511934617401?text=Ol%C3%A1%2C%20estava%20navegando%20em%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento' />
			</div>
		</div>
	);
}
