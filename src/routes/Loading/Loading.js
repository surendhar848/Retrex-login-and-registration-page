import React from "react";
import { Typography} from "@material-ui/core"
import logo from '../../images/Retrex.png'
import "../../App.css"

function Loading() {
  return (
    <div>
       <Typography style={{
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "200px",
                fontSize: "36px",
                color: "#8651D9",
              }}
              variant="h3">
              Welcome back, Kiel
            </Typography>
            <Typography
              style={{ 
                textAlign: "center", 
                fontSize: "36px",
                color: "#8651D9", 
            }}
            variant="h1"
              
            >
              We are preparing your workspace
            </Typography>
      
        <img src={logo} className="App-logo" alt="logo"/>
  
    </div>
  );
}

export default Loading;
