import styled, { keyframes } from 'styled-components';
const spinner = keyframes`
	to {
		transform: rotate(1turn);
	}
`;
const StyledElement = styled.div`
	animation: ${spinner} 0.8s infinite linear;
	background: conic-gradient(#0000 10%, #0000ff);
	border-radius: 50%;
	height: 43px;
	mask: radial-gradient(farthest-side, #0000, calc(100% - 4px), #000 0);
	width: 43px;
	-webkit-mask: radial-gradient(
		farthest-side,
		#0000,
		calc(100% - 4px),
		#000 0
	);
`;
export default StyledElement;
