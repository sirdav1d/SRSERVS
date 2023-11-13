/** @format */

import CTAButton from '../../atoms/ctaBtn';
import TextComponent from '../../molecules/textComponent';
import Navbar from '../../molecules/navbar';

export default function HeroSection() {
	return (
		<div
			id='home'
			className='relative lg:w-full h-screen'>
			<Navbar />

			<div className='absolute w-full h-screen bg-black/70 bg-blend-overlay bg-no-repeat bg-cover bg-center bg-fixed top-0 left-0 bg-bgHero px-5 md:px-14'>
				<div className='flex flex-col gap-6 ml-0 2xl:ml-80 my-48 2xl:my-60 max-w-[640px] text-white'>
					<TextComponent
						role='Headline'
						text='Reduza Custos e Aumente Sua Produtividade com Nossos Serviços'
						paragraph='Com uma equipe treinada e dedicada, podemos personalizar soluções que
					atendam às suas necessidades específicas. Isso significa economia de
					tempo, redução de custos e produtividade garantida. Deixe a
					terceirização inteligente otimizar o seu caminho para o sucesso
					empresarial'
					/>
					<CTAButton
						text='Solicitar Orçamento'
						apiCall='/'
					/>
				</div>
			</div>
		</div>
	);
}
