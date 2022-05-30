import React from 'react';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
   100% {
      transform: rotate(360deg);
   }
`;
const dash = keyframes`
   0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
   }
   50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
   }
   100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
   }
`;
const Container = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
	& div {
		border-radius: 18px;
		height: 36px;
		position: relative;
		width: 36px;
		& .absolute {
			animation: ${rotate} 1.5s linear infinite;
			left: 0;
			position: absolute;
			top: 0;
			& circle {
				animation: ${dash} 1.5s ease-in-out infinite;
			}
		}
	}
`;
const Spinner = () => (
	<Container>
		<div>
			<svg className='absolute' width='36' height='36' viewBox='0 0 36 36'>
				<circle
					cx='18'
					cy='18'
					fill='none'
					r='15'
					stroke='#000000'
					strokeLinecap='round'
					strokeWidth='3'></circle>
			</svg>
			<svg width='36' height='36' viewBox='0 0 36 36'>
				<circle
					cx='18'
					cy='18'
					fill='none'
					r='15'
					stroke='rgba(105, 111, 133, 0.5)'
					strokeLinecap='round'
					strokeWidth='3'></circle>
			</svg>
		</div>
	</Container>
);
export default Spinner;
