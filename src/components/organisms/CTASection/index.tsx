/** @format */

import TextComponent from '../../molecules/textComponent';
import logo from '../../../assets/logoSRServs.webp';
import CTAButton from '../../atoms/ctaBtn';

export default function CTASection() {
	return (
		<div
			id='contact'
			className='h-fit mt-24 py-10 lg:w-full  bg-[#F1FAFE]'>
			<div className=' max-w-[1280px] px-5 lg:mx-14 xl:mx-auto relative flex flex-col w-full'>
				{' '}
				<TextComponent
					role={'cta'}
					text={'Transforme sua Empresa com Nossos Serviços'}
					paragraph='Solicite um orçamento personalizado hoje e descubra como podemos ajudar a alcançar suas metas'
				/>
				<img
					src={logo}
					alt='logo SR Serviços'
					className='absolute lg:right-0 lg:-top-10 right-10 -top-32 w-40 lg:w-60 xl:w-96 drop-shadow-xl'
				/>
				<CTAButton text={'Falar Com Setor Comercial'} />
			</div>
		</div>
	);
}
