/** @format */

import adm from '../../../assets/cards/contrato.webp';
import recepcao from '../../../assets/cards/recepcao.webp';
import TextComponent from '../../molecules/textComponent';
import CardServs from './cardServs';

import limpeza from '../../../assets/cards/pisos-1.webp';

import portaria from '../../../assets/cards/servicos-de-portaria.webp';

export default function ServicesSection() {
	const dataCards = [
		{
			img: recepcao,
			title: 'Recepção',
			resume:
				'Ao terceirizar a recepção, sua empresa ganha em eficiência, qualidade e flexibilidade, otimizando recursos e promovendo uma imagem profissional',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, corporis pariatur facilis, delectus libero consequuntur error doloribus est perspiciatis veritatis aperiam illo consequatur dolores! Culpa nesciunt explicabo excepturi quam sapiente?',
		},
		{
			img: limpeza,
			title: 'Limpeza e Conservação',
			resume:
				'Mantenha a excelência na limpeza, economize custos e foque no essencial ao terceirizar, assegurando ambientes impecáveis e produtivos',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, corporis pariatur facilis, delectus libero consequuntur error doloribus est perspiciatis veritatis aperiam illo consequatur dolores! Culpa nesciunt explicabo excepturi quam sapiente?',
		},
		{
			img: portaria,
			title: 'Portaria 24hrs',
			resume:
				'Terceirizar portaria proporciona segurança, controle de acesso eficaz, economia de custos e especialização, garantindo uma gestão de segurança otimizada',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, corporis pariatur facilis, delectus libero consequuntur error doloribus est perspiciatis veritatis aperiam illo consequatur dolores! Culpa nesciunt explicabo excepturi quam sapiente?',
		},
		{
			img: adm,
			title: 'Auxiliar Admministrativo',
			resume:
				'Otimize operações e fortaleça a equipe ao terceirizar auxiliares administrativos, proporcionando eficiência e expertise à gestão empresarial',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, corporis pariatur facilis, delectus libero consequuntur error doloribus est perspiciatis veritatis aperiam illo consequatur dolores! Culpa nesciunt explicabo excepturi quam sapiente?',
		},
	];
	return (
		<div
			id='servs'
			className='bg-[#F1FAFE] w-full mt-10 py-20 h-fit '>
			<div className=' max-w-[1280px] mx-auto flex flex-col gap-20 '>
				<TextComponent
					role={'title'}
					text={'Descubra Como Podemos Atender às Suas Necessidades'}
				/>
				<div className='flex w-full gap-20 justify-between'>
					{dataCards.map((data, index) => {
						return (
							<>
								<CardServs
									img={data.img}
									title={data.title}
									resume={data.resume}
									description={data.description}
									key={index}
								/>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
