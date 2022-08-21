import styled, { keyframes } from 'styled-components';
const spinner = keyframes`
	100% {
		transform: rotate(1turn);
	}
`;
const StyledElement = styled.div`
	-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
	animation: ${spinner} 0.8s infinite linear;
	background: radial-gradient(farthest-side, #0000ff 94%, #0000) top/5px 5px
			no-repeat,
		conic-gradient(#0000 30%, #0000ff);
	border-radius: 50%;
	height: 44px;
	mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
	width: 44px;
`;
const Gradient = () => <StyledElement />;
export default Gradient;
