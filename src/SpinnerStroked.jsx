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
	& svg {
		animation: ${rotate} 2s linear infinite;
		& circle {
			animation: ${dash} 1.75s ease-in-out infinite;
		}
	}
`;

const SpinnerStroked = () => (
	<Container>
		<svg width='50' height='50' viewBox='0 0 50 50'>
			<circle
				cx='25'
				cy='25'
				fill='none'
				r='18'
				stroke='#5254f1'
				strokeLinecap='round'
				strokeWidth='5'></circle>
		</svg>
	</Container>
);
export default SpinnerStroked;
