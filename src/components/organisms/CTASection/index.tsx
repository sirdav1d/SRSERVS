/** @format */

import TextComponent from '../../molecules/textComponent';
import logo from '../../../assets/logoSRServs.webp';
import CTAButton from '../../atoms/ctaBtn';

export default function CTASection() {
	const handleClick = () => {
		try {
			window.open('mailto:guilherme@srservicos.com.br', '_blank');
			console.log('clicando');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div
			id='contact'
			className='h-fit mt-24 py-10  bg-[#F1FAFE]'>
			<div className=' max-w-[1280px] px-5 lg:mx-14 xl:mx-auto relative flex flex-col '>
				{' '}
				<TextComponent
					role={'cta'}
					text={'Transforme sua Empresa com Nossos Serviços'}
					paragraph='Solicite um orçamento personalizado hoje e descubra como podemos ajudar a alcançar suas metas'
				/>
				<img
					src={logo}
					alt='logo SR Serviços'
					className='absolute  lg:-top-10 right-10 -top-32 w-40 lg:w-60 xl:w-96 drop-shadow-xl'
				/>
				<CTAButton text={'Falar Com Setor Comercial'} />
				<button
					className='bg-red-600   w-fit h-fit p-4'
					onClick={() => handleClick()}>
					teste
				</button>
			</div>
		</div>
	);
}
