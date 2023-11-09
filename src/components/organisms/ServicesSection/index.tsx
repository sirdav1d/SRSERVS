/** @format */

import TextComponent from '../../molecules/textComponent';
import CardServs from './cardServs';

export default function ServicesSection() {
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
					<CardServs
						img={''}
						title={'Recepção'}
					/>
					<CardServs
						img={''}
						title={'Limpeza e Conservação'}
					/>
					<CardServs
						img={''}
						title={'Portaria 24hrs'}
					/>
					<CardServs
						img={''}
						title={'Auxiliar Administrativo'}
					/>
				</div>
			</div>
		</div>
	);
}
