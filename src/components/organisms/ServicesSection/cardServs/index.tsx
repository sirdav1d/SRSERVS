/** @format */
'use client';

import ModalService from '../modalService';

export type CardServsProps = {
	img: string;
	title: string;
	resume?: string;
	description: string;
};

export default function CardServs({
	img,
	title,
	resume,
	description,
}: CardServsProps) {
	return (
		<div
			className={` rounded relative bg-white h-96 w-80 shadow-md hover:shadow-lg duration-300 transition-all flex flex-col cursor-pointer ease-linear justify-between`}>
			<img
				src={img}
				alt={title}
				width={400}
				height={400}
				className={`h-40 duration-300 ease transition-all rounded-t-lg object-cover`}
			/>
			<div className='flex flex-col gap-1 p-4 h-full justify-between'>
				<h3 className='mx-auto w-full font-bold text-lg text-stone-900 drop-shadow-sm text-center'>
					{title}
				</h3>
				<p className='text-sm'>{resume}</p>
				<ModalService
					img={img}
					title={title}
					resume={''}
					description={description}
				/>
			</div>
		</div>
	);
}
