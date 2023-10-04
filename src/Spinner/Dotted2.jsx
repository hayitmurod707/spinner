import styled, { keyframes } from 'styled-components';
const animation = keyframes`
   30% {
      transform: rotate(220deg);
   }
   40% {
      transform: rotate(450deg);
      opacity: 1;
   }
   75% {
      transform: rotate(720deg);
      opacity: 1;
   }
   76% {
      opacity: 0;
   }
   100% {
      opacity: 0;
      transform: rotate(0deg);
   }
`;
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 44px;
   justify-content: center;
   width: 44px;
   & .content {
      & .loader {
         animation: ${animation} 3s linear infinite;
         height: 1px;
         position: absolute;
         width: 1px;
      }
      & .loader .dot {
         background-color: #5254f1;
         border-radius: 50%;
         height: 6px;
         position: relative;
         top: 18px;
         width: 6px;
      }
      & .loader:nth-child(1) {
         animation-delay: 0.15s;
      }
      & .loader:nth-child(2) {
         animation-delay: 0.3s;
      }
      & .loader:nth-child(3) {
         animation-delay: 0.45s;
      }
      & .loader:nth-child(4) {
         animation-delay: 0.6s;
      }
      & .loader:nth-child(5) {
         animation-delay: 0.75s;
      }
      & .loader:nth-child(6) {
         animation-delay: 0.9s;
      }
   }
`;
const Dotted2 = () => (
   <StyledElement>
      <div className='content'>
         <div class='loader'>
            <div class='dot'></div>
         </div>
         <div class='loader'>
            <div class='dot'></div>
         </div>
         <div class='loader'>
            <div class='dot'></div>
         </div>
         <div class='loader'>
            <div class='dot'></div>
         </div>
         <div class='loader'>
            <div class='dot'></div>
         </div>
         <div class='loader'>
            <div class='dot'></div>
         </div>
      </div>
   </StyledElement>
);
export default Dotted2;
