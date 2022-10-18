import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import Ssl from "../../images/ssl.jpg";
import AuthWhite from "../../images/authwhite.png";
import authlogo from "../../images/authlogo.png";
import Visibility from "@mui/icons-material/Visibility";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";
import "../../App.css";
// import { makeStyles} from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import {Navigate,useNavigate} from "react-router-dom"
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function Login() {
  // const classes = useStyles();
  const theme = useTheme();
  // console.log(islogout, 'islogout');
  const veryWideScreen = useMediaQuery(theme.breakpoints.up("md"), {
    noSsr: true,
  });
  const navigate = useNavigate()
 
  const [gotoLoading, setGoToLoading] = React.useState(false);
  if (gotoLoading) {
    return <Navigate to="/Loading" />;
  }
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        style={{ backgroundColor: "#345B83" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <img
            src={authlogo}
            style={{
              height: veryWideScreen ? "auto" : "100px",
              width: veryWideScreen ? "auto" : "100px",
              float: veryWideScreen ? "right" : "none",
              margin: veryWideScreen ? "20px" : "0px",
              
            }}
            alt="logo"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            margin: veryWideScreen ? "20px" : "0px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              lineHeight: veryWideScreen ? "40px" : "auto",
              textAlign: veryWideScreen ? "right" : "center",
              color: "white",

              fontSize: veryWideScreen ? "48px" : "15px",
              width: veryWideScreen ? "390px" : "auto",
              float: veryWideScreen ? "right" : "none",
            }}
          >
            Powerful, easy-to-use application for real estate trading
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        className="authBackGround"
        style={{ backgroundImage: `url(${AuthWhite})` }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ margin: "20px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              
              
              
            
             


            }}
          >
            <Typography>Don’t have an account?</Typography>

            <Button
              variant="contained"
              onClick={() =>{
                navigate("/Register")} }
              style={{
                background: "linear-gradient(45deg, #63a0ed 30%, #c495d1 90%)",
                marginLeft: "10px",
              }}
            >
              SIGN UP
            </Button>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: veryWideScreen ? "45px" : "20px",
          }}
        >
          <div style={{ paddingBottom: veryWideScreen ? "50px" : "10px" }}>
            <Typography
              variant="h3"
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "36px",
                color: "#8651D9",
              }}
            >
              Log into RetreX
            </Typography>
            <Typography
              style={{ textAlign: "left", fontSize: "16px" }}
              variant="h6"
            >
              Enter your login details below.
            </Typography>
          </div>

          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "16px",
            }}
            variant="h6"
          >
            Email Address
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter your email"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            type="tel"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {
                    <MailOutlineIcon
                      style={{
                        paddingRight: "10px",
                        borderRight: "1px solid",
                      }}
                    />
                  }
                </InputAdornment>
              ),
            }}
          />
          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "16px",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
            variant="h6"
          >
            Password
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter your password"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            type="password"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {
                    <KeyIcon
                      style={{
                        paddingRight: "10px",
                        borderRight: "1px solid",
                      }}
                    />
                  }
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">{<Visibility />}</InputAdornment>
              ),
            }}
          />
          <Typography  onClick={() =>{
                navigate("/Ent_mail")} }
          style={{
            textAlign: "right",
            fontSize:"18px",
            marginLeft:"10px",
            color:"#8651D9"
          }}
          >
          Forget Password?  
          </Typography>
          <FormGroup style={{ marginTop: "35px" }}>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </FormGroup>
          <Button  onClick={() => {
            setGoToLoading(true);
            } }
            variant="outlined"
            style={{
              width: "120px",
              alignself: "flex-start",
              marginTop: "30px",
              textTransform: "none",
            } 
          
          
          
          }

            
          >
            Login
          </Button>
        </Grid>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            float: "right",
            padding: "0px",
            alignItems: "flex-end",
            // position: "absolute",
          }}
        >
          <img
            src={Ssl}
            style={{ width: "139px", height: "39px", float: "right" }}
            alt="ssl"
          />
          <Typography variant="caption" style={{ float: "right" }}>
            Copyright 2022 - Retrex Pty Ltd.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
