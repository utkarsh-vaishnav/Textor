// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/Textbox';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3500);
  }

  const toggleMode =() => {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#29323c';
      showAlert("Dark mode activated", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#D7DDE8';
      showAlert("Light mode activated", "success");
    }
  }

  return (
    <>
    <Navbar title = "TEXTOR" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert= {alert}/>
    <div className="container my-3">
    <TextBox showAlert={showAlert} heading="TEXTOR - Text editor app" mode={mode}/>
    </div>
    </>
  );
}

export default App;
