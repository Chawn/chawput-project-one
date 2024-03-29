export default function CheckSuccessIcon({ width, height }: any) {
	return (
		<svg
			width={width || '80'}
			height={height || '80'}
			viewBox='0 0 80 80'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='80' height='80' rx='40' fill='#F1F8E9' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M40 23.5C30.8873 23.5 23.5 30.8873 23.5 40C23.5 49.1127 30.8873 56.5 40 56.5C49.1127 56.5 56.5 49.1127 56.5 40C56.5 30.8873 49.1127 23.5 40 23.5ZM20.5 40C20.5 29.2304 29.2304 20.5 40 20.5C50.7696 20.5 59.5 29.2304 59.5 40C59.5 50.7696 50.7696 59.5 40 59.5C29.2304 59.5 20.5 50.7696 20.5 40Z'
				fill='#33691E'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M47.0607 34.9393C47.6464 35.5251 47.6464 36.4749 47.0607 37.0607L39.0607 45.0607C38.4749 45.6464 37.5251 45.6464 36.9393 45.0607L32.9393 41.0607C32.3536 40.4749 32.3536 39.5251 32.9393 38.9393C33.5251 38.3536 34.4749 38.3536 35.0607 38.9393L38 41.8787L44.9393 34.9393C45.5251 34.3536 46.4749 34.3536 47.0607 34.9393Z'
				fill='#33691E'
			/>
		</svg>
	)
}
