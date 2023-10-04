import { Fragment, useState } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100px;
   justify-content: center;
   width: 100%;
`;
const App = () => {
   const [state, setState] = useState(false);
   return (
      <Fragment>
         <h1>Spinner</h1>
         <h4>
            <a href='https://github.com/hayitmurod707/spinner'>Github</a>
         </h4>
         <h3 style={{ textAlign: 'center' }}>
            <button
               onClick={() => {
                  setState(!state);
               }}
            >
               Change
            </button>
         </h3>
         <StyledElement>
            <Spinner />
         </StyledElement>
      </Fragment>
   );
};
export default App;
