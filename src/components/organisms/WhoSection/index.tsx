/** @format */

import TextComponent from '../../molecules/textComponent';
import work from '../../../assets/work.webp';

export default function WhoSection() {
	return (
		<div
			id='who'
			className='h-fit max-w-[1280px] mx-5 lg:mx-14 xl:mx-auto mt-20'>
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
				className='h-auto lg:h-[400px] mt-10 object-cover rounded shadow-xl hidden lg:block '
			/>
		</div>
	);
}
