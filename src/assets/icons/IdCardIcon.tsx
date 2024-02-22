import React from 'react'

export default function IdCardIcon({ width, height }: any) {
	return (
		<svg
			width={width || '24'}
			height={height || '24'}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='3'
				y='4'
				width='18'
				height='16'
				rx='3'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='9'
				cy='10'
				r='2'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15 8H17'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15 12H17'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7 16H17'
				stroke='#9E9E9E'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
