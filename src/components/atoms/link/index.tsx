/** @format */

type LinkProps = {
	anchor: string;
	text: string;
};

export default function Link({ anchor, text }: LinkProps) {
	return (
		<div>
			<a
				className='flex flex-col gap-0 transition-all duration-300 ease relative focus-within:text-lightSRBlue checked:text-lightSRBlue focus:text-lightSRBlue'
				href={anchor}>
				<h4>{text}</h4>
			</a>
		</div>
	);
}
