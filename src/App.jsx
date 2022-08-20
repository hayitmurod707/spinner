import styled from 'styled-components';
import Bubbles from './Loading/Bubbles';
import CircularGradient from './Loading/CircularGradient';
import CircularProgress from './Loading/CircularProgress';
import Spin from './Loading/Spin';
import Windows2 from './Loading/Windows2';
import Windows from './Loading/Windows';
// primary color #0000ff
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	height: 100px;
	justify-content: center;
	width: 100%;
	align-items: center;
	flex-direction: column;
`;
const App = () => (
	<>
		<StyledElement>
			<h3>Windows</h3>
			<div>
				<Windows />
			</div>
		</StyledElement>
		<StyledElement>
			<h3>Windows 2</h3>
			<div>
				<Windows2 />
			</div>
		</StyledElement>
		<StyledElement>
			<h3>Spin</h3>
			<div>
				<Spin />
			</div>
		</StyledElement>
		<StyledElement>
			<h3>CircularProgress</h3>
			<div>
				<CircularProgress />
			</div>
		</StyledElement>
		<StyledElement>
			<h3>CircularGradient</h3>
			<div>
				<CircularGradient />
			</div>
		</StyledElement>
		<StyledElement>
			<h3>Bubbles</h3>
			<div>
				<Bubbles />
			</div>
		</StyledElement>
	</>
);
export default App;
