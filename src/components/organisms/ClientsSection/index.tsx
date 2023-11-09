/** @format */

import TextComponent from '../../molecules/textComponent';
import trensurbLogo from '../../../assets/clients/trensurbLogo.webp';
import ufrgsLogo from '../../../assets/clients/Ufrgs.webp';
import araucariaLogo from '../../../assets/clients/araucaria.webp';
import armarinhosLogo from '../../../assets/clients/armarinhos.webp';
import crcLogo from '../../../assets/clients/crc.webp';
import IPTLogo from '../../../assets/clients/IPT.webp';
import JMalucelliLogo from '../../../assets/clients/JMalucelli.webp';
import lfdaLogo from '../../../assets/clients/lfda.webp';
import spLogo from '../../../assets/clients/logo_cidadeSP.webp';
import IPPUC22Logo from '../../../assets/clients/logoIPPUC22.webp';
import messemLogo from '../../../assets/clients/messem.webp';
import sabespLogo from '../../../assets/clients/sabesp.webp';
import sampelLogo from '../../../assets/clients/sampel.webp';
import sebraeLogo from '../../../assets/clients/sebrae.webp';
import sescLogo from '../../../assets/clients/sesc.webp';
import trt2Logo from '../../../assets/clients/trt2.webp';

export default function ClientsSection() {
	const logos = [
		trensurbLogo,
		ufrgsLogo,
		araucariaLogo,
		armarinhosLogo,
		crcLogo,
		IPTLogo,
		JMalucelliLogo,
		lfdaLogo,
		spLogo,
		IPPUC22Logo,
		messemLogo,
		sampelLogo,
		sabespLogo,
		sebraeLogo,
		sescLogo,
		trt2Logo,
	];
	return (
		<div
			id='clients'
			className=' w-full mt-20 h-fit '>
			<div className=' max-w-[1280px] mx-auto flex flex-col gap-5 '>
				<TextComponent
					role={'title'}
					text={'Venha Fazer Parte Da Nossa Comunidade de Clientes'}
				/>
				<ul className='flex flex-wrap flex-shrink-0 items-center justify-center'>
					{logos.map((logo, index) => {
						return (
							<li key={index}>
								<img
									className='grayscale hover:grayscale-0 duration-300 transition-all ease-linear scale-[60%] '
									src={logo}
									alt='Logo de Parceiros'
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
