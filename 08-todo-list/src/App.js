import React from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TaskList/>
      </div>
    </React.Fragment>
  );
}

export default App;
