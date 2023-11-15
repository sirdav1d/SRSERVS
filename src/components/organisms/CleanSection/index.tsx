/** @format */

import cleanImg from '../../../assets/faxina.webp';
import CTAButton from '../../atoms/ctaBtn';
import TextComponent from '../../molecules/textComponent';

export default function CleanSection() {
	return (
		<div className='flex max-w-[1280px] mx-5 lg:mx-14 xl:mx-auto mt-24 '>
			<div className='flex flex-col lg:flex-row gap-20  items-center justify-between'>
				<img
					src={cleanImg}
					alt='Faxineiro'
					className='w-[440px] object-contain hidden lg:block'
					width={480}
					height={480}
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
