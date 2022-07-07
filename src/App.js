import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); 
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      //showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
     
      //showAlert("Light mode has been enabled", "success");
    
    }
  };
  return (
    <>

      <Router>
      
    <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
          <Route exact path="/about"  element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextManipulator - UpperCase To Lower Case | LowerCase To UpperCase | Reverse Text  " mode={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
