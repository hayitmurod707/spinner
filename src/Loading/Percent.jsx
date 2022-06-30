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
const StyledElement = styled.svg`
	animation: ${rotate} 1.5s linear infinite;
	& circle {
		animation: ${dash} 1.5s linear infinite;
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
