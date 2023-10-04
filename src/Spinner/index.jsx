import Circular1 from './Circular1';
import Circular2 from './Circular2';
import Circular3 from './Circular3';
import Dotted1 from './Dotted1';
import Dotted2 from './Dotted2';
import Dotted3 from './Dotted3';
import Dotted4 from './Dotted4';
const Spinner = () => {
   const spinner = [
      <Circular1 />,
      <Circular2 />,
      <Circular3 />,
      <Dotted1 />,
      <Dotted2 />,
      <Dotted3 />,
      <Dotted4 />,
   ][Math.floor(Math.random() * 6) + 1];
   return spinner;
};
export default Spinner;
