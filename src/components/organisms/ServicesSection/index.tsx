/** @format */

import adm from '../../../assets/cards/contrato.webp';
import recepcao from '../../../assets/cards/recepcao.webp';
import TextComponent from '../../molecules/textComponent';
import CardServs from './cardServs';
import limpeza from '../../../assets/cards/pisos-1.webp';
import portaria from '../../../assets/cards/servicos-de-portaria.webp';
import jardinagem from '../../../assets/cards/jardineiro.webp';
import limpaVidro from '../../../assets/cards/limpando_vidros.webp';

export default function ServicesSection() {
	const dataCards = [
		{
			img: limpeza,
			title: 'Limpeza e Conservação',
			resume:
				'Mantenha a excelência na limpeza, economize custos e foque no essencial ao terceirizar, assegurando ambientes impecáveis e produtivos',
			description:
				'Ao terceirizar a limpeza, sua empresa concentra-se no que faz de melhor, enquanto profissionais especializados cuidam do ambiente. A limpeza consistente e de alta qualidade cria ambientes acolhedores, impactando positivamente a satisfação dos colaboradores e a impressão dos visitantes. Eliminando despesas associadas à gestão interna de uma equipe de limpeza, sua empresa pode direcionar recursos financeiros para áreas mais estratégicas, impulsionando a eficiência global.',
		},
		{
			img: portaria,
			title: 'Portaria 24hrs',
			resume:
				'Terceirizar portaria proporciona segurança, controle de acesso eficaz, economia de custos e especialização, garantindo uma gestão de segurança otimizada',
			description:
				'Ao terceirizar o controle de acesso e portaria, sua empresa pode se concentrar estrategicamente em melhorar e aprimorar os protocolos de segurança. Isso não apenas reforça a imagem de sua empresa, mas também contribui para a tranquilidade e confiança de colaboradores e visitantes. Além disso, sua empresa pode se adaptar rapidamente a mudanças na demanda ou requisitos específicos, garantindo um serviço adaptável e eficaz em diferentes cenários operacionais.',
		},
		{
			img: recepcao,
			title: 'Recepção',
			resume:
				'Ao terceirizar a recepção, sua empresa ganha em eficiência, qualidade e flexibilidade, otimizando recursos e promovendo uma imagem profissional',
			description:
				'A terceirização do serviço de recepcionista garante uma recepção calorosa e profissional a cada visitante. Profissionais altamente treinados e dedicados são a face acolhedora de sua empresa, criando impressões memoráveis alinhadas aos valores da organização, que elevam o profissionalismo e a imagem corporativa.',
		},

		{
			img: adm,
			title: 'Auxiliar Administrativo',
			resume:
				'Otimize operações e fortaleça a equipe ao terceirizar auxiliares administrativos, proporcionando eficiência e expertise à gestão empresarial',
			description:
				'Conte com a expertise de profissionais especializados para lidar com uma ampla gama de tarefas administrativas. A terceirização proporciona acesso imediato a habilidades e conhecimentos específicos, elevando a qualidade e a eficácia das operações administrativas. Profissionais altamente treinados oferecem suporte estratégico, lidando com tarefas administrativas com precisão e agilidade.',
		},
		{
			img: jardinagem,
			title: 'Jardinagem',
			resume:
				'Terceirizar jardinagem promove ambientes atraentes, sustentáveis e economicamente inteligentes.',
			description:
				'A terceirização do serviço de jardinagem não apenas garante a manutenção de jardins deslumbrantes, mas também revitaliza os espaços ao redor de sua empresa. Profissionais altamente especializados não só cuidam das plantas, mas também aplicam técnicas avançadas para criar ambientes ao ar livre que inspiram tranquilidade e produtividade.',
		},
		{
			img: limpaVidro,
			title: 'Limpeza de Vidros e Janelas',
			resume:
				'Otimize operações e fortaleça a equipe ao terceirizar auxiliares administrativos, proporcionando eficiência e expertise à gestão empresarial',
			description:
				'Além de garantir a limpeza perfeita de vidros e janelas, a terceirização implica em uma notável redução de riscos associados a essas tarefas. Profissionais especializados utilizam equipamentos de segurança e aplicam práticas rigorosas, assegurando não apenas uma limpeza eficaz, mas também um ambiente de trabalho seguro.',
		},
	];
	return (
		<div
			id='servs'
			className='bg-[#F1FAFE] w-full mt-10 py-20 h-fit '>
			<div className=' max-w-[1280px] mx-5 lg:mx-14 xl:mx-auto flex flex-col gap-20 '>
				<TextComponent
					role={'title'}
					text={'Descubra Como Podemos Atender às Suas Necessidades'}
				/>
				<div className='flex flex-wrap items-center w-full gap-5 lg:gap-14 justify-center'>
					{dataCards.map((data, index) => {
						return (
							<li key={index}>
								<CardServs
									img={data.img}
									title={data.title}
									resume={data.resume}
									description={data.description}
									key={index}
								/>
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
}
