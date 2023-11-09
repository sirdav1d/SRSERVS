/** @format */

import TextComponent from '../../molecules/textComponent';
import work from '../../../assets/work.webp';

export default function WhoSection() {
	return (
		<div
			id='who'
			className='h-fit w-full  max-w-[1280px] mx-auto mt-20'>
			<TextComponent
				role={'title'}
				text={
					'Nossa História de Excelência e Comprometimento é a Sua Garantia de Qualidade'
				}
				paragraph={
					'Fundada em 1996, nossa empresa cresceu para operar em três unidades localizadas em estados diferentes: SP, PR e RS. Oferecemos uma ampla variedade de serviços, desde Manobristas/Motoristas até Empacotadores/Repositores. Saiba mais sobre nossa jornada de sucesso e nosso compromisso com a excelência'
				}
			/>
			<img
				src={work}
				alt='Equipe de Trabalho'
				width={'100%'}
				className='h-[400px] mt-10 object-cover w-full rounded shadow-xl'
			/>
		</div>
	);
}
