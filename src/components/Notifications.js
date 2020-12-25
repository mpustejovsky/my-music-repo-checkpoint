import React, {Component} from 'react';





class Notifications extends Component {
   
    constructor(props){
        super(props);
        this.state={
            checkedA: true
        }
    }
    
    render(){
         
        if (this.props.loggedin){
        return(<div className="notifiy_list">
            
            {this.props.notificationsMain.onlineMess ?  "Your Application is offline. You won't be able to share or stream music to other devices." :null}
            {this.props.notificationsMain.onlineMess ? <br></br> : null}
            {this.props.notificationsMain.soundlevelMess ? "Listening to music at high volume could cause long-term hearing loss." : null}
            {this.props.notificationsMain.soundlevelMess ? <br></br> : null}
            {this.props.notificationsMain.soundQualityMess ? "Music quality is degraded. Increase quality if your connection allows it." : null}
           
            
        </div>)}
        else return null
    }
}


export default Notifications;