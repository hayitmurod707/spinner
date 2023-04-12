import styled, { keyframes } from 'styled-components';
const animation = keyframes`
   0%,
   100% {
      transform: scale(0);
   }
   40%,
   60% {
      transform: scale(1);
   } 
`;
const StyledElement = styled.div`
   display: flex;
   height: 10px;
   width: 58px;
   & div {
      animation: ${animation} 1s infinite ease backwards;
      background-color: #5254f1;
      border-radius: 100%;
      height: 10px;
      margin: 0 3px;
      width: 10px;
      &:first-child {
         margin: 0 3px 0 0;
      }
      &:last-child {
         margin: 0 0 0 3px;
      }
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
   }
`;
const Bubbles = () => (
   <StyledElement>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
   </StyledElement>
);
export default Bubbles;
