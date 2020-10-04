import React from 'react';
import './App.css';
import PageHeader from './PageHeader'
import RequesterTasks from './RequesterTasks'
import PageFooter from './PageFooter'
import { Segment } from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <PageHeader />
      <RequesterTasks />
    </div>
  );
}

export default App;
