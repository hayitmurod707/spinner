import styled from 'styled-components';
import Dots from './Loading/Dots';
import Gradient from './Loading/Gradient';
import Percent from './Loading/Percent';
import Windows from './Loading/Windows';
import Windows2 from './Loading/Windows2';
// primary color #0000ff
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
			<Percent />
		</StyledElement>
		<StyledElement>
			<Gradient />
		</StyledElement>
		<StyledElement>
			<Dots />
		</StyledElement>
	</>
);
export default App;
