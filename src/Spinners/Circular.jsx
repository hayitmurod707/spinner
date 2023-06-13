import styled, { keyframes } from 'styled-components';
const circular = keyframes`
   to {
      transform: rotate(360deg);
   }
`;
const StyledElement = styled.div`
   animation: ${circular} 0.6s linear infinite;
   border-radius: 50%;
   border: 4px solid rgba(82, 85, 241, 0.25);
   border-top-color: #5254f1;
   height: 36px;
   width: 36px;
`;
const Circular = () => <StyledElement />;
export default Circular;
