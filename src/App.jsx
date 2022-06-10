import React from 'react';
import styled from 'styled-components';
import Gradient from './Gradient';
import ScalingDots from './ScalingDots';
import Spinner from './Spinner';
import Windows from './Windows';
import Windows2 from './Windows2';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	height: 100px;
	justify-content: center;
	width: 100%;
`;
const App = () => (
	<>
		<StyledElement>
			<Windows />
		</StyledElement>
		<StyledElement>
			<Windows2 />
		</StyledElement>
		<StyledElement>
			<Spinner />
		</StyledElement>
		<StyledElement>
			<Gradient />
		</StyledElement>
		<StyledElement>
			<ScalingDots />
		</StyledElement>
	</>
);
export default App;
