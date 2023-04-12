import { Fragment } from 'react';
import styled from 'styled-components';
import Bubbles from './Spinners/Bubbles';
import Circular from './Spinners/Circular';
import Circular2 from './Spinners/Circular2';
import Circular3 from './Spinners/Circular3';
import Dotted from './Spinners/Dotted';
import Dotted2 from './Spinners/Dotted2';
import Dotted3 from './Spinners/Dotted3';
import Dotted4 from './Spinners/Dotted4';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100px;
   justify-content: center;
   width: 100%;
`;
const App = () => (
   <Fragment>
      <h1>Spinners</h1>
      <h4>
         <a href='https://github.com/hayitmurod707/spinner'>Github</a>
      </h4>
      <StyledElement>
         <h3>Dotted</h3>
         <div>
            <Dotted />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Dotted 2</h3>
         <div>
            <Dotted2 />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Dotted 3</h3>
         <div>
            <Dotted3 />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Dotted 4</h3>
         <div>
            <Dotted4 />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Circular</h3>
         <div>
            <Circular />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Circular 2</h3>
         <div>
            <Circular2 />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Circular 3</h3>
         <div>
            <Circular3 />
         </div>
      </StyledElement>
      <StyledElement>
         <h3>Bubbles</h3>
         <div>
            <Bubbles />
         </div>
      </StyledElement>
   </Fragment>
);
export default App;
