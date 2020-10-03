import React from 'react';
import './App.css';
import PageHeader from './PageHeader'
import MainContent from './MainContent'
import PageFooter from './PageFooter'

function App() {
  return (
    <div className="App">
      <PageHeader />
      <MainContent />
      <PageFooter />
    </div>
  );
}

export default App;
