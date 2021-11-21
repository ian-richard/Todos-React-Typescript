import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={['task 1', 'task 2', 'task 3']}/>
    </div>
  );
}

export default App;
