/** @format */

import cleanImg from '../../../assets/Faxineira_apontando-transformed.webp';
import CTAButton from '../../atoms/ctaBtn';
import TextComponent from '../../molecules/textComponent';

export default function CleanSection() {
	return (
		<div className='flex max-w-[1280px] mx-auto mt-24'>
			<div className='flex gap-20'>
				<img
					src={cleanImg}
					alt='Faxineira Apontando'
					className='w-[440px] drop-shadow-lg object-contain'
				/>
				<div className='w-full'>
					<TextComponent
						role='clean'
						text='Limpeza e Conservação: Transformando Ambientes em Lugares de Excelência'
						paragraph='Com uma trajetória que abrange anos de dedicação, nossa empresa se tornou sinônimo de qualidade em limpeza e conservação. Descubra como nossa experiência molda os serviços que oferecemos.'
					/>
					<CTAButton text='Contratar Serviço' />
				</div>
			</div>
		</div>
	);
}
