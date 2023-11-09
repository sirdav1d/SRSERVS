/** @format */

import { useState } from 'react';

export default function ModalService() {
	const [show, setShow] = useState(false);

	function handleclick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		1;
		e.preventDefault();
		setShow(!show);
	}
	return (
		<>
			<button
				className='mt-3 hover:shadow-lg  hover:bg-lightSRBlue bg-midSRBlue p-2 rounded text-white font-bold drop-shadow-md transition-all duration-300'
				onClick={(e) => handleclick(e)}>
				Saiba Mais
			</button>
			{show && (
				<div className='bg-white/40 backdrop-blur-sm h-screen w-screen overflow-hidden fixed z-50 border top-0 left-0 flex mx-auto transition-all duration-300 ease-linear'>
					<div className='bg-white flex w-1/2 h-1/2 m-auto shadow-xl rounded-lg relative z-50'>
						<button
							onClick={() => setShow(false)}
							className=' w-20 h-20 absolute right-1 top-1 rotate-45 text-6xl text-red-600 hover:scale-110 duration-100 transition-all ease-linear'>
							+
						</button>
						Modaaaaal
					</div>
				</div>
			)}
		</>
	);
}
