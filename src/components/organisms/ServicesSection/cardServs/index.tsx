/** @format */
'use client';

import ModalService from '../modalService';

type CardServsProps = {
	img: string;
	title: string;
	resume: string;
	description:string;
};

export default function CardServs({ img, title, resume }: CardServsProps) {
	return (
		<div
			className={`border 
			} rounded relative bg-white h-96  w-64 shadow-md hover:shadow-lg duration-300 transition-all cursor-pointer ease-linear`}>
			<img
				src={img}
				alt={title}
				width={400}
				height={400}
				className={`h-40 duration-300 ease transition-all rounded-t-lg `}
			/>
			<div className='flex flex-col gap-1 p-4 '>
				<h3 className='mx-auto w-full font-bold text-lg text-lightSRBlue drop-shadow-sm text-center'>
					{title}
				</h3>
				<p className='text-sm'>
					{resume}
				</p>
				<ModalService />
			</div>
		</div>
	);
}
