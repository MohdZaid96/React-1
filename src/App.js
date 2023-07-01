import "./App.css";
import Child from './components/Child'
import FunctionExample from "./components/FunctionExample";
import ConditionalRendering from './components/ConditionalRendering';
// import './components/Child.module.css'
// import './components/GrandChild.module.css'

const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
			<Child firstName='Vinod' lastName='Kumar' />
			<Child firstName='Rohit' lastName='M' />
			<Child firstName='Shubhi' lastName='G' />
			<FunctionExample />
			<ConditionalRendering />
    </div>
  );
};

export default App;











/*
	## Component (name should be in PascalName):
	- Class (Class-based component) or Function (Function-based component)
	- Returns JSX
	- Can be nested
	- Can be reused

	## render:
	- Initial load of a component inside DOM

	# props (objects):
	Data passed from parent component to child component

	# List rendering

*/
