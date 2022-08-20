import React from 'react';
import styled, { keyframes } from 'styled-components';
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const StyledElement = styled.div`
	animation: ${spin} 1s linear infinite;
	border-radius: 50%;
	border: 4px solid rgba(137, 141, 166, 0.3);
	border-top-color: #0000ff;
	height: 36px;
	width: 36px;
`;
const Spin = () => <StyledElement></StyledElement>;
export default Spin;
