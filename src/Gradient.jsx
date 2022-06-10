import React from 'react';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
	0% {
		transform: rotate(0);
	}
   100% {
		transform: rotate(360deg);
	}
`;
const StyledElement = styled.svg`
	animation: ${rotate} infinite 1s;
	animation-timing-function: linear;
`;
const Gradient = () => (
	<svg
		className='rc-progress-circle'
		fill='none'
		width={46}
		height={46}
		viewBox='0 0 100 100'>
		<defs>
			<linearGradient
				id='rc_progress_3-gradient'
				x1='100%'
				y1='0%'
				x2='0%'
				y2='0%'>
				<stop offset='0%' stopColor='#87d068'></stop>
				<stop offset='100%' stopColor='#108ee9'></stop>
			</linearGradient>
		</defs>
		<circle
			className='rc-progress-circle-trail'
			r='47'
			cx='50'
			cy='50'
			stroke='#D9D9D9'
			strokeLinecap='round'
			strokeWidth='6'
			style={{
				stroke: 'rgb(217, 217, 217)',
				strokeDasharray: '295.31px, 295.31',
				strokeDashoffset: 0,
				transform: 'rotate(-90deg)',
				transformOrigin: '50% 50%',
				transition: 'stroke-dashoffset 0.3s ease 0s',
				strokeDasharray:
					'0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s',
				fillOpacity: 0,
			}}></circle>
		<circle
			className='rc-progress-circle-path'
			r='47'
			cx='50'
			cy='50'
			stroke='url(#rc_progress_3-gradient)'
			strokeLinecap='round'
			strokeWidth='6'
			opacity='1'
			style={{
				strokeDasharray: '295.31px, 295.31',
				strokeDashoffset: 0,
				transform: 'rotate(144deg)',
				transformOrigin: '50% 50%',
				fillOpacity: 0,
				transition:
					'stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke ease 0s, stroke-width ease 0.3s, opacity ease 0s',
			}}></circle>
		<circle
			className='rc-progress-circle-path'
			r='47'
			cx='50'
			cy='50'
			strokeLinecap='round'
			strokeWidth='6'
			opacity='1'
			stroke={{
				stroke: 'red',
				strokeDasharray: '295.31px, 295.31',
				strokeDashoffset: '106.358',
				transform: 'rotate(-90deg)',
				transformOrigin: '50% 50%',
				transition:
					'stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke ease 0s, stroke-width ease 0.3s, opacity ease 0s',
				fillOpacity: 0,
			}}></circle>
	</svg>
);
export default Gradient;
