import React from 'react';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
   0% {
    transform: rotate(0);
  }
  50% {
    tranform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
`;
const dash = keyframes`
   0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	1% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 150;
	}
	99% {
		stroke-dasharray: 130, 150;
		stroke-dashoffset: -150;
	}
	100% {
		stroke-dasharray: 130, 150;
		stroke-dashoffset: 0;
	}
`;
const StyledElement = styled.svg`
	& circle {
		animation: ${dash} 2s linear infinite;
	}
`;
const Component = () => (
	<StyledElement width='46' height='46' viewBox='0 0 46 46'>
		<circle
			cx='23'
			cy='23'
			fill='none'
			r='19.5'
			stroke='#0000ff'
			strokeLinecap='round'
			strokeWidth='3.5'></circle>
	</StyledElement>
);
export default Component;
