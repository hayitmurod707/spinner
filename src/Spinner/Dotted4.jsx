import styled, { keyframes } from 'styled-components';
const animation1 = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;
const animation2 = keyframes`
	80%,
	100% {
		transform: rotate(360deg);
	}
`;
const StyledElement = styled.div`
   height: 44px;
   width: 44px;
   & .content {
      animation: ${animation1} 2.5s infinite linear both;
      height: 44px;
      position: relative;
      width: 44px;
      & div {
         animation: ${animation2} 2s infinite ease-in-out both;
         height: 100%;
         left: 0;
         position: absolute;
         top: 0;
         width: 100%;
         &:nth-child(1) {
            animation-delay: -1.1s;
         }
         &:nth-child(2) {
            animation-delay: -1s;
         }
         &:nth-child(3) {
            animation-delay: -0.9s;
         }
         &:nth-child(4) {
            animation-delay: -0.8s;
         }
         &:nth-child(5) {
            animation-delay: -0.7s;
         }
         &:nth-child(6) {
            animation-delay: -0.6s;
         }
         &:before {
            background-color: #5254f1;
            border-radius: 3px;
            content: '';
            display: block;
            height: 6px;
            left: calc(50% - 3px);
            position: absolute;
            top: 0;
            width: 6px;
         }
      }
   }
`;
const Dotted4 = () => (
   <StyledElement>
      <div className='content'>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   </StyledElement>
);
export default Dotted4;
