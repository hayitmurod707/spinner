import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
const skChase = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;
const skChaseDot = keyframes`
	80%,
	100% {
		transform: rotate(360deg);
	}
`;
const Container = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
	& .sk-chase {
		animation: ${skChase} 2.5s infinite linear both;
		height: 40px;
		position: relative;
		width: 40px;
		& .sk-chase-dot {
			animation: ${skChaseDot} 2s infinite ease-in-out both;
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
				background-color: blue;
				border-radius: 5px;
				content: '';
				display: block;
				height: 8px;
				width: 8px;
			}
		}
	}
`;
const Styles = createGlobalStyle`
	html,
	body {
		overflow: hidden !important;
	}
`;
const SpinnerDotted = () => (
	<Container>
		<div className='sk-chase'>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
		</div>
		<Styles />
	</Container>
);
export default SpinnerDotted;
