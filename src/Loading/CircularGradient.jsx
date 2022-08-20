import styled, { keyframes } from 'styled-components';
const spinner = keyframes`
	100% {
		transform: rotate(1turn);
	}
`;
const StyledElement = styled.div`
	animation: ${spinner} 0.8s infinite linear;
	border-radius: 50%;
	height: 43px;
	width: 43px;
	/* mask: radial-gradient(farthest-side, #0000, calc(100% - 4px), #000 0);
	background: conic-gradient(#0000 10%, #0000ff);
	-webkit-mask: radial-gradient(
		farthest-side,
		#0000,
		calc(100% - 4px),
		#000 0
	); */
	background: radial-gradient(farthest-side, #0000ff 94%, #0000) top/5px 5px
			no-repeat,
		conic-gradient(#0000 30%, #0000ff);
	mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
	-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
`;
const Gradient = () => <StyledElement />;
export default Gradient;
