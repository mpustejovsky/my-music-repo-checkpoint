import React, {Component} from 'react';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import Switch from '@material-ui/core/Switch';



class ConnectionControl extends Component {
   
    constructor(props){
        super(props);
        this.state={
            checkedA: true,
            checkedB: true
           
        }
    }
 
 

 


  render(){
  return (
    <Card className='root'>
      <CardContent>
        
        <Typography className="title"  component="h2">
          {this.props.connectionMode} <br />
        </Typography>

        <Typography variant="body2" component="p">
        <br />
        Is this application connected to the internet?
          <br />
        Toggle the switch to change mode!
          
        </Typography>
      </CardContent>
    
      <Switch align-item="left"
        checked={this.checkedA}
        onChange={this.props.handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </Card>
  );
}}

export default ConnectionControl;