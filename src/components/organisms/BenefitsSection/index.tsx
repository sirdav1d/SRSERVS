/** @format */

import teamImg from '../../../assets/workersMetting.webp';
import CTAButton from '../../atoms/ctaBtn';
import TextComponent from '../../molecules/textComponent';

export default function BenefitsSection() {
	return (
		<div
			className='h-fit mt-24 w-full'
			id='benefits'>
			<div className=' max-w-[1280px] mx-5 lg:mx-14 xl:mx-auto items-end justify-center  flex gap-5'>
				<img
					src={teamImg}
					alt='Faxineira Apontando'
					className='w-[640px] drop-shadow-lg object-contain hidden xl:block '
				/>
				<div className='w-full'>
					{' '}
					<TextComponent
						role='teamWork'
						text='Principais Vantagens em Escolher a SR Serviços'
						paragraph='Além de melhorar a qualidade e a produtividade, a SR Serviços ajuda a reduzir significativamente os custos operacionais. Eliminamos despesas com contratações, demissões e principalmente com as reclamações trabalhistas'
					/>
					<CTAButton text='Contratar Serviço' />
				</div>
			</div>
		</div>
	);
}
