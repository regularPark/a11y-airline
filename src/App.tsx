import React from 'react';
import './App.css';
import SpinButton from './components/SpinButton';

function App() {
  return (
    <div className="App">
      <SpinButton labelName="성인" />
      <SpinButton labelName="소아" />
      <SpinButton labelName="유아" />
    </div>
  );
}

export default App;
