// import ImageDisplayer from '../../../components_jsx/components_jsx/src/Components/ImageDisplayer';
// import './App.css';
// import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';
import ControlledCompForm from './Components/ControlledCompForm'
import UncontrolledForm from './Components/UncontrolledComponent';
import Modal from './Components/DependencyArray';
import FocusInputComponent from './Components/UseRefComponent';
import TimeoutComponent from './Components/TimeoutComponent';
import BooleanToggler from './Components/BooleanToggler';
import MapParentElement from './Components/MapParentElement';
import SecondCounter from './Components/SecondCounter';
import TextLengthCounter from './Components/TextLengthCounter';

function App() {
  return (
    <>
    {/* <h1>Example heading from app.js</h1>
    <Component1 />
    <Component2 />
    <ImageDisplayer /> */}
    <ControlledCompForm />
    <UncontrolledForm />
    <Modal />
    <FocusInputComponent />
    <TimeoutComponent />
    <BooleanToggler />
    <MapParentElement />
    <SecondCounter />
    <TextLengthCounter />
    </>
  );
}

export default App;

