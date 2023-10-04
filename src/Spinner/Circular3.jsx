import styled, { keyframes } from 'styled-components';
const animation = keyframes`
	100% {
		transform: rotate(1turn);
	}
`;
const StyledElement = styled.div`
   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
   animation: ${animation} 0.6s infinite linear;
   background: radial-gradient(farthest-side, #5254f1 94%, #0000) top/5px 5px
         no-repeat,
      conic-gradient(#0000 30%, #5254f1);
   border-radius: 50%;
   height: 44px;
   mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
   width: 44px;
`;
const Circular3 = () => <StyledElement />;
export default Circular3;
