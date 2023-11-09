/** @format */

import TextComponent from '../../molecules/textComponent';
import logo from '../../../assets/logoSRServs.webp';
import CTAButton from '../../atoms/ctaBtn';

export default function CTASection() {
	return (
		<div id='contact'>
			<div
				className='h-fit mt-24 p-10 w-full  bg-[#F1FAFE]'
				id='benefits'>
				<div className=' max-w-[1280px] mx-auto relative flex flex-col'>
					{' '}
					<TextComponent
						role={'cta'}
						text={'Transforme sua Empresa com Nossos Serviços'}
						paragraph='Solicite um orçamento personalizado hoje e descubra como podemos ajudar a alcançar suas metas'
					/>
					<img
						src={logo}
						alt='logo SR Serviços'
						className='absolute right-0 -top-40 w-96 drop-shadow-xl'
					/>
					<CTAButton text={'Falar Com Setor Comercial'} />
				</div>
			</div>
		</div>
	);
}
