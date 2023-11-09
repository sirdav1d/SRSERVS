/** @format */

import { BiLogoWhatsapp } from 'react-icons/bi';

interface BTNPropos {
	apiCall?: string;
}

export default function WPPButton({ apiCall = '#' }: BTNPropos) {
	return (
		<>
			<a
				className='p-4 bg-gradient-to-r from-lightSRGreen to-midSRBlue  w-fit rounded  shadow-sm flex items-center gap-3   hover:shadow-xl transition-all duration-300 ease-linear bg-btnSize hover:bg-right bg-left'
				href={apiCall}
				target='_blank'
				rel='noopener noreferrer'>
				<BiLogoWhatsapp
					color={'white'}
					size={24}
				/>
				<h4 className='text-white font-bold text-base'>Entrar em Contato</h4>
			</a>
		</>
	);
}
