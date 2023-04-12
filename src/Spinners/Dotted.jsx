import styled, { keyframes } from 'styled-components';
const animation = keyframes`
   100% {
      transform: rotateZ(-1turn);
   }
`;
const animation1 = keyframes`
   0% {
      opacity: 1;
      transform: rotate(40deg);
   }
   10.5556% {
      transform: rotate(0deg);
   }
   60.5556% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation2 = keyframes`
   5.55556% {
      opacity: 0;
   }
   5.55581% {
      opacity: 1;
      transform: rotate(0deg);
   }
   16.1111% {
      transform: rotate(-40deg);
   }
   66.1111% {
      transform: rotate(-40deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation3 = keyframes`
   11.1111% {
      opacity: 0;
   }
   11.1116% {
      opacity: 1;
      transform: rotate(-40deg);
   }
   21.6667% {
      transform: rotate(-80deg);
   }
   71.6667% {
      transform: rotate(-80deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation4 = keyframes`
   16.6667% {
    opacity: 0;
   }
   16.6674% {
      opacity: 1;
      transform: rotate(-80deg);
   }
   27.2222% {
      transform: rotate(-120deg);
   }
   77.2222% {
      transform: rotate(-120deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation5 = keyframes`
   22.2222% {
      opacity: 0;
   }
   22.2232% {
      opacity: 1;
      transform: rotate(-120deg);
   }
   32.7778% {
      transform: rotate(-160deg);
   }
   82.7778% {
      transform: rotate(-160deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation6 = keyframes`
   27.7778% {
      opacity: 0;
   }
   27.779% {
      opacity: 1;
      transform: rotate(-160deg);
   }
   38.3333% {
      transform: rotate(-200deg);
   }
   88.3333% {
      transform: rotate(-200deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation7 = keyframes`
   33.3333% {
      opacity: 0;
   }
   33.3348% {
      opacity: 1;
      transform: rotate(-200deg);
   }
   43.8889% {
      transform: rotate(-240deg);
   }
   93.8889% {
      transform: rotate(-240deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation8 = keyframes`
   38.8889% {
      opacity: 0;
   }
   38.8906% {
      opacity: 1;
      transform: rotate(-240deg);
   }
   49.4444% {
      transform: rotate(-280deg);
   }
   99.4444% {
      transform: rotate(-280deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const animation9 = keyframes`
   44.4444% {
      opacity: 0;
   }
   44.4464% {
      opacity: 1;
      transform: rotate(-280deg);
   }
   55% {
      transform: rotate(-320deg);
   }
   100% {
      transform: rotate(-320deg);
      opacity: 1;
   }
`;
const StyledElement = styled.div`
   height: 44px;
   transform: rotateY(180deg);
   width: 44px;
   & .content {
      align-items: center;
      animation: 3s ease-in 0s infinite normal none running ${animation};
      display: flex;
      height: 44px;
      justify-content: center;
      position: relative;
      width: 44px;
      & div {
         height: 44px;
         opacity: 0;
         position: absolute;
         width: 44px;
         &:nth-child(1) {
            animation: 2s linear 0s infinite normal none running ${animation1};
            transform: rotate(40deg);
         }
         &:nth-child(2) {
            animation: 2s linear 0s infinite normal none running ${animation2};
            transform: rotate(80deg);
         }
         &:nth-child(3) {
            animation: 2s linear 0s infinite normal none running ${animation3};
            transform: rotate(120deg);
         }
         &:nth-child(4) {
            animation: 2s linear 0s infinite normal none running ${animation4};
            transform: rotate(160deg);
         }
         &:nth-child(5) {
            animation: 2s linear 0s infinite normal none running ${animation5};
            transform: rotate(200deg);
         }
         &:nth-child(6) {
            animation: 2s linear 0s infinite normal none running ${animation6};
            transform: rotate(240deg);
         }
         &:nth-child(7) {
            animation: 2s linear 0s infinite normal none running ${animation7};
            transform: rotate(280deg);
         }
         &:nth-child(8) {
            animation: 2s linear 0s infinite normal none running ${animation8};
            transform: rotate(320deg);
         }
         &:nth-child(9) {
            animation: 2s linear 0s infinite normal none running ${animation9};
            transform: rotate(360deg);
         }
         &:before {
            background-color: #5254f1;
            border-radius: 50%;
            content: '';
            height: 6px;
            left: 50%;
            position: absolute;
            top: 0%;
            transform: translateX(-50%);
            width: 6px;
         }
      }
   }
`;
const Dotted = () => (
   <StyledElement>
      <div className='content'>
         <div></div>
         <div></div>
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
export default Dotted;
