import './App.css';
import {useState} from 'react';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showClassBased, setShowClassBased] = useState(true);

  return (
    <div className="App">
      <h2>Class-Based Components</h2>
      <button onClick={() => setShowClassBased(!showClassBased)}>Toggle View</button>
      { showClassBased && <ClassBased message="hello world" /> }
      { !showClassBased && <Lifecycle /> }
    </div>
  );
};

// const classBased = new ClassBased(props);
// classBased.props = props;
// classBased.render();
// classBased.componentDidMount();

export default App;
