/** @format */

type CardServsProps = {
	img: string;
	title: string;
};

export default function CardServs({ img, title }: CardServsProps) {
	return (
		<div className='rounded relative bg-stone-700 h-80 p-5 w-64 shadow-md hover:shadow-xl duration-300 transition-all cursor-pointer ease-linear'>
			<img
				src={img}
				alt={title}
			/>
			<h3 className='mx-auto w-full font-bold text-center absolute bottom-5 text-lg text-white left-0'>
				{title}
			</h3>
		</div>
	);
}
