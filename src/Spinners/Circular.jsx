import styled, { keyframes } from 'styled-components';
const circular = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const StyledElement = styled.div`
   animation: ${circular} 1s linear infinite;
   border-radius: 50%;
   border: 4px solid rgba(137, 141, 166, 0.3);
   border-top-color: #5254f1;
   height: 36px;
   width: 36px;
`;
const Circular = () => <StyledElement />;
export default Circular;
