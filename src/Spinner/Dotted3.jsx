import styled, { keyframes } from 'styled-components';
const animation = keyframes`
   0% {
      transform: rotate(0deg) translateY(-20px);
   }
   60%,
   100% {
      transform: rotate(360deg) translateY(-20px);
   }
`;
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 44px;
   justify-content: center;
   width: 44px;
   & .content {
      position: relative;
      & div {
         animation: ${animation} 1.875s infinite backwards;
         background-color: #5254f1;
         border-radius: 50%;
         height: 6px;
         left: -3px;
         position: absolute;
         top: -3px;
         width: 6px;
         &:nth-child(1) {
            animation-delay: 0.1s;
         }
         &:nth-child(2) {
            animation-delay: 0.2s;
         }
         &:nth-child(3) {
            animation-delay: 0.3s;
         }
         &:nth-child(4) {
            animation-delay: 0.4s;
         }
         &:nth-child(5) {
            animation-delay: 0.5s;
         }
         &:nth-child(6) {
            animation-delay: 0.6s;
         }
         &:nth-child(7) {
            animation-delay: 0.7s;
         }
      }
   }
`;
const Dotted3 = () => (
   <StyledElement>
      <div className='content'>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   </StyledElement>
);
export default Dotted3;
