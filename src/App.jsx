import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import SpinnerDotted from './SpinnerDotted';
import SpinnerStroked from './SpinnerStroked';
const Container = styled.div`
	height: 100px;
	width: 100%;
`;
const App = () => {
	return (
		<>
			<Container>
				<Spinner />
			</Container>
			<Container>
				<SpinnerDotted />
			</Container>
			<Container>
				<SpinnerStroked />
			</Container>
		</>
	);
};
export default App;
