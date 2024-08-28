/** @format */

import { BiLogoWhatsapp } from 'react-icons/bi';

interface BTNPropos {
	apiCall?: string;
}

export default function WPPButton({ apiCall = '#' }: BTNPropos) {
	return (
		<>
			<a
				className='px-4 py-3 bg-gradient-to-r tracking-wide from-lightSRGreen to-midSRBlue  w-fit rounded  shadow-sm flex items-center gap-3   hover:shadow-xl transition-all duration-300 ease-linear bg-btnSize hover:bg-right bg-left'
				href={apiCall}
				target='_blank'
				rel='noopener noreferrer'>
				<BiLogoWhatsapp
					color={'white'}
					size={24}
				/>
				<h4 className='text-white font-bold text-base'>Solicitar Orçamento</h4>
			</a>
		</>
	);
}
