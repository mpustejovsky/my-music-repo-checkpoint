import React, {Component} from 'react';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import Slider from '@material-ui/core/Slider';



class MasterVolume extends Component {
   
    constructor(props){
        super(props);
        this.state={
            checkedA: true,
            checkedB: true,
            connectionMode:"On Line"
        }
    }
 

   
  


  render(){
  return (
    <Card className='root'>
      <CardContent>
        
        <Typography className="title"  component="h2">
          Master Volume <br />
        </Typography>

        <Typography variant="body2" component="p">
        <br />
        Overrides all other sound settings in this application
          <br />
          
        </Typography>
      </CardContent>

      <div className="slider">
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={this.props.valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange = {this.props.masterVol}
             /></div>
    </Card>
  );
}}

export default MasterVolume;