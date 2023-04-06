import { useState } from 'react';
import './App.css';
import Header from './components/Header/';
import Form from './components/form/';
import MyOrg from './components/MyOrg';

function App() {
const[showForm, updateShow]=useState(true)

//Ternario --> condicion ? seMuestra : noSeMuestra
// Condicion && seMuestra

const changeShow = () =>{
  updateShow(!showForm)
}

  return (
    <div>
      <Header/>
      { showForm && <Form/>}      
      <MyOrg changeShow ={changeShow}/>
    </div>
  );
}

export default App;
