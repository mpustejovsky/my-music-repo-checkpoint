
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

class LogInScreen extends Component{

    constructor(props){
        super(props);

        this.state ={
            test:""
        }

    }

 
    render(){
    if (!this.props.loggedin){
    return(
        <div>
            <h3>Log In Here</h3>
            <form className="newform" noValidate autoComplete="off" background-color="lightblue">
            <TextField name="UserName" onChange={this.props.inputUpdate} id="filled-basic" required label="UserName" variant="filled" />
            <TextField name="PASSWORD" onChange={this.props.inputUpdate} id="filled-basic" label="PASSWORD" variant="filled" />
            </form>
            <Button variant="contained" color="primary" onClick={this.props.toggle}>LOGIN</Button>
        </div>
    )}
    else return <div>Welcome {this.props.UserName} </div>
}}

export default LogInScreen