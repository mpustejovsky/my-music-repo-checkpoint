
import './App.css';

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import LogInScreen from './components/LogInScreen'
import MainPage from './components/MainPage'
import ButtonBar from "./components/ButtonBar"


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loggedin:false,
      message:"Hello Please Login To My Music App",
      UserName:"",
      PASSWORD:""
    }
  }


  toggle =()=>{

    if (this.state.UserName===""){console.log("must fill out username at minimum")}

    else{
    this.setState({
      loggedin:true,
      message:`${this.state.UserName} welcome to My Music App`
    })}
  }

  inputUpdate = (event) =>{
    this.setState({[event.target.name]:event.target.value})
    
   
  }
 
  logoutFunction =()=>{
    this.setState({loggedin:false,
                    UserName:""
    
    })
  }
  

  render(){
  return (
    <div className="App">
      <header className="App-header">

      <React.Fragment>
      <AppBar position="fixed" align="left">Welcome to My Music App
      {this.state.loggedin ? <ButtonBar logoutFunction={this.logoutFunction}/> : null}
      </AppBar>
     
        </React.Fragment>
        <LogInScreen UserName={this.state.UserName} loggedin={this.state.loggedin} toggle={this.toggle} inputUpdate={this.inputUpdate}/>

        <MainPage loggedin={this.state.loggedin} handeleNote={this.handeleNote}/>

        

        </header>
    </div>
  );}
}

export default App;
