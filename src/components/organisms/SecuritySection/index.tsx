/** @format */

import secImg from '../../../assets/porteiro.webp';
import CTAButton from '../../atoms/ctaBtn';
import TextComponent from '../../molecules/textComponent';

export default function SecuritySection() {
	return (
		<div className='flex max-w-[1280px] mx-5 lg:mx-14 xl:mx-auto mt-24'>
			<div className='flex gap-20'>
				<div className='w-full'>
					<TextComponent
						role='security'
						text='Portaria 24 Horas e Recepção: Segurança e Hospitalidade Ininterruptas'
						paragraph='Ter um serviço terceirizado de portaria e recepção é um investimento estratégico. A portaria é a primeira linha de defesa, garantindo a segurança e a tranquilidade de seu espaço. A recepção reflete a hospitalidade e profissionalismo da sua organização. Com especialistas dedicados, você otimiza o funcionamento da empresa, proporcionando um ambiente seguro e acolhedor'
					/>

					<CTAButton text='Contratar Serviço' />
				</div>
				<img
					src={secImg}
					alt='Porteiro'
					className='hidden lg:block w-[440px] drop-shadow-lg object-contain'
				/>
			</div>
		</div>
	);
}
