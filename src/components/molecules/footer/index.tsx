/** @format */

import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from 'react-icons/bi';
import { FaInstagramSquare } from 'react-icons/fa';
import logo from '../../../assets/logoSRServs_gray.png';

export default function Footer() {
	return (
		<div className='h-fit py-10 bg-[#001444] text-white'>
			<div className='max-w-[1280px] mx-auto relative flex flex-col gap-5 '>
				<img
					src={logo}
					alt='logo SR Serviços'
					className='opacity-40 w-40 grayscale'
				/>
				<div className='flex gap-10 justify-between'>
					<div className='flex flex-col gap-5'>
						<h3 className='font-bold text-2xl'>Endereços</h3>
						<ul className='text-stone-200 text-base flex flex-col gap-3'>
							<li>
								São Paulo/SP – Rua Visconde de Itaboraí, 269 Cep 03308-050
							</li>
							<li>Curitiba/PR – Rua Dr. Roberto Barroso, 479 Cep 80520-070</li>
							<li>Canoas/RS – Rua Osvaldo cruz, 146 Cep 92110-470</li>
						</ul>
					</div>
					<div className='flex flex-col gap-5'>
						<h3 className='font-bold text-2xl'>Contatos</h3>
						<ul className='text-stone-200 text-base flex flex-col gap-3'>
							<li>Fone (11) 2098-4933</li>
							<li> Fone (41) 3353-1683 </li>
							<li> Fone (51) 3077-0905</li>
						</ul>
					</div>
					<div className='flex flex-col gap-5'>
						<h3 className='font-bold text-2xl'>Site Map</h3>
						<ul className='text-stone-200 text-base flex flex-col gap-1 '>
							<li className='hover:font-bold hover:text-white '>
								<a href='#home'>HOME</a>
							</li>
							<li className='hover:font-bold hover:text-white '>
								<a href='#who'>QUEM SOMOS</a>{' '}
							</li>
							<li className='hover:font-bold hover:text-white '>
								<a href='#servs'>SERVIÇOS</a>
							</li>
							<li className='hover:font-bold hover:text-white '>
								<a href='#clients'>PARCEIROS</a>
							</li>
							<li className='hover:font-bold hover:text-white '>
								<a href='#benefits'>BENEFÍCIOS</a>
							</li>
							<li className='hover:font-bold hover:text-white '>
								<a href='#contact'>CONTATO</a>
							</li>
						</ul>
					</div>

					<ul className='flex flex-col items-center gap-5 h-full'>
						<li>
							<a
								href='#home'
								target='_blank'>
								<BiLogoFacebookSquare
									size={40}
									className='text-lightSRBlue grayscale hover:grayscale-0 hover:drop-shadow-iconShadow duration-300 transition-all ease-linear'
								/>
							</a>
						</li>
						<li>
							<a
								href='#who'
								target='_blank'>
								<FaInstagramSquare
									size={40}
									className='text-lightSRBlue grayscale hover:grayscale-0 hover:drop-shadow-iconShadow duration-300 transition-all ease-linear'
								/>
							</a>{' '}
						</li>
						<li>
							{' '}
							<a
								href='#servs'
								target='_blank'>
								<BiLogoLinkedinSquare
									size={40}
									className='text-lightSRBlue grayscale hover:grayscale-0 hover:drop-shadow-iconShadow duration-300 transition-all ease-linear'
								/>
							</a>
						</li>
					</ul>
				</div>
				<span className='w-full h-[2px] bg-white/20 rounded-full' />
				<div className='flex w-full justify-between text-stone-300 text-sm'>
					<p>
						Desenvolvido pela{' '}
						<a
							className='hover:text-red-500 duration-300 transition-all'
							href='https://tarsprojetos.com/'
							target='_blank'
							rel='noopener noreferrer'>
							Tars Projetos © {''}
						</a>
						{''}2023 Todos os Direitos Reservados
					</p>
					<div className='flex gap-5 underline text-stone-300 text-sm'>
						<a
							className='hover:text-white'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							Políticas de Privacidade
						</a>
						<a
							className='hover:text-white'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							Termos de Uso
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
