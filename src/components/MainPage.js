import React, {Component} from 'react';
import ConnectionControl from './ConnectionControl';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';
import Notifications from './Notifications'


class Dashboard extends Component{

    constructor(props){
        super(props);

        this.state ={
            test:"",
            connectionMode:"On Line",
            qualitySetting:"2",
            notificationsMain:{
                                onlineMess:null,
                                soundlevelMess:null,
                                soundQualityMess:null
        
                              }
        }

    }

   
    masterVol =(event,value)=>{
    

        if (value>=80 && !this.state.notificationsMain.soundlevelMess){
           

            let tempholder = this.state.notificationsMain;
            tempholder.soundlevelMess=true;
            this.setState({
                notificationsMain:tempholder
            })}
            if (value<80)
            {
                let tempholder = this.state.notificationsMain;
                tempholder.soundlevelMess=null;
                this.setState({
                    notificationsMain:tempholder  
                })}
    } 

    valuetext =(value)=> {
        
        
        return `${value}`;
      }
    
    handleQualityChange = (event) => {
        this.setState({qualitySetting: event.target.value});
        

        if (event.target.value==="1"){
           
            let tempnotification = this.state.notificationsMain;
            tempnotification.soundQualityMess=true;
            this.setState({
                notificationsMain:tempnotification,
            })
        }else{
            let tempnotification = this.state.notificationsMain;
            tempnotification.soundQualityMess=null;
            this.setState({
                notificationsMain:tempnotification,
            })

        }
      };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.checked });
        if (this.state.connectionMode==="On Line"){
            let tempnotification = this.state.notificationsMain;
            tempnotification.onlineMess=true;
            this.setState({
                notificationsMain:tempnotification,
                connectionMode:"Off Line"
            })
        }
        else {
            let tempnotification = this.state.notificationsMain;
            tempnotification.onlineMess=null;            
            this.setState({
            notificationsMain:tempnotification,
            connectionMode:"On Line"
        })}
        
      };
    
   
    render(){

    if (this.props.loggedin){    
    return(
        <div id="overall_dash">
        <div id="main-dashboard">
          
  
       <ConnectionControl connectionMode={this.state.connectionMode} handleNote={this.props.handleNote} handleChange={this.handleChange}/>
       <MasterVolume valuetext ={this.valuetext} masterVol={this.masterVol} />
       <SoundQuality qualitySetting={this.state.qualitySetting} handleQualityChange={this.handleQualityChange}/>
       
      
      
      </div>
      <Notifications loggedin={this.props.loggedin} notificationsMain={this.state.notificationsMain}/>
      </div>
    )}
    else {return null}
    }
}

export default Dashboard