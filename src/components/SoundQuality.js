import React, {Component} from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class SoundQuality extends Component {

   
   
    constructor(props){
        super(props);
       
        
        this.state={
           
            setOpen2:true
            
        }
        
    }


  render(){
  return (
      
    <Card  className='root' >
      <CardContent>
        
        <Typography className="title"  component="h2">
          Sound Quality <br />
        </Typography>

        <Typography  variant="body2" component="p">
        <br />
        Manually control the music quality in event of poor connection
          <br /><br />
          
        </Typography>
     

      
      
      <FormControl className="quality_form" >
        <InputLabel id="demo-controlled-open-select-label" className="quality_label">Quality Control</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          
           
       
          value={this.props.qualitySetting}
          onChange={this.props.handleQualityChange}
        >
          <MenuItem value="1">Low</MenuItem>
          <MenuItem value="2">Normal</MenuItem>
          <MenuItem value="3">High</MenuItem>
        </Select>
      </FormControl>  </CardContent>
    </Card>
    
  );
}}

export default SoundQuality;