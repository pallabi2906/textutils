import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Component from './components/Component';
import Textarea from './components/Textarea';
import React, {useState} from "react";
// import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert();
    },3000);
  }
  
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='black';
      showAlert("Dark Mode has been enable","success");
      document.title='Textutils-dark';
      setInterval(()=>{
        document.title='Textutils is amazing';
      },2000);
      setInterval(()=>{
        document.title='Install Textutils';
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode has been enable","success");
      document.title='Textutils-light';
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
       <Component title="Logo" about="AboutTextutils" mode={mode} toggleMode={toggleMode}></Component>
       <Alert alert={alert}></Alert>
       <Textarea heading="enter some text" mode={mode} showAlert={showAlert}></Textarea>
      

{/* <Routes>
      <Route exact path="/" element={ <Textarea heading="enter some text" mode={mode} showAlert={showAlert}></Textarea>} />
      <Route exact path="/about" element={<About/>} />
    </Routes> */}
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
