export default function LockIcon({ width, height }: any) {
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='11'
				width='14'
				height='10'
				rx='2'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='12'
				cy='16'
				r='1'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
