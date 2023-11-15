/** @format */

'use client';

import { useEffect, useState } from 'react';

export default function BannerLGPD() {
	function handleDeny() {
		alert(
			'Recomendamos que aceite as Políticas de privacidade e os termos de uso, para uma melhor experiência do usuário',
		);
		localStorage.clear();
	}

	function handleAccept(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		e.preventDefault();
		localStorage.setItem('lgpd', 'accept');
		setCanShow(false);
	}

	const [canShow, setCanShow] = useState(false);

	useEffect(() => {
		const resp = localStorage.getItem('lgpd');
		if (resp) {
			setCanShow(false);
		} else {
			setCanShow(true);
		}
	}, [canShow]);

	return canShow ? (
		<div className='fixed z-50 w-full max-w-[348px] p-5 flex flex-col bg-white text-slate-900 bottom-5 rounded-md mx-5 shadow-lg border-lightSRBlue border-2'>
			<p>
				Nós utilizamos cookies para melhorar sua experiência como usuário. Para
				conferir detalhadamente nossas boas práticas, clique em{' '}
				<a
					className='font-bold hover:opacity-75 hover:underline'
					href='/resources/Politicas.pdf'
					referrerPolicy='no-referrer'
					target='_blank'>
					Políticas de Privacidade
				</a>{' '}
				e{' '}
				<a
					className='font-bold hover:opacity-75 hover:underline'
					href='/resources/Termos_de_uso.pdf'
					referrerPolicy='no-referrer'
					target='_blank'>
					Termos de Uso
				</a>
			</p>
			<div className='flex gap-5 mt-3'>
				<button
					className='w-full rounded bg-midSRBlue p-3 font-bold text-white drop-shadow-sm hover:bg-lightSRBlue duration-300 ease transition-all hover:shadow-md '
					onClick={(e) => handleAccept(e)}>
					Aceitar
				</button>
				<button
					className='w-full underline hover:opacity-50  duration-300 ease transition-all'
					onClick={() => handleDeny()}>
					Recusar
				</button>
			</div>
		</div>
	) : (
		<></>
	);
}
