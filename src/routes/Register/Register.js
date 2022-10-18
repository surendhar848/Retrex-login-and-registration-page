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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// import { makeStyles} from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import Grid from "@material-ui/core/Grid";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import {useNavigate,Navigate} from "react-router-dom"
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
    const [gotoLogin, setGoToLogin] = React.useState(false);
    if (gotoLogin) {
      return <Navigate to="/" />;
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
            <Typography>Have an account?</Typography>

            <Button
              variant="contained"
              onClick={() => {
                setGoToLogin(true);
                } }
              style={{
                background: "linear-gradient(45deg, #63a0ed 30%, #c495d1 90%)",
                marginLeft: "10px",
              }}
            >
              SIGN IN
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
          <div style={{ paddingBottom: veryWideScreen ? "20px" : "10px" }}>
          
            <Typography
              variant="h3"
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "36px",
                color: "#8651D9",
              }}
            >
              Register into RetreX
            </Typography>
            <Typography
              style={{ textAlign: "left", fontSize: "16px" }}
              variant="h6"
            >
              Enter your Register details below.
            </Typography>
          </div>
          <Grid lg={12}item container spacing={4}>
          <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              paddingBottom: "10px",
              paddingTop: "0px",
              fontSize: "16px",
            }}
            variant="h6"
          >
          Name
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter your name"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            type="tel"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {
                    <AccountCircleIcon
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
          </Grid>
          <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              paddingBottom: "10px",
              paddingTop: "0px",
              fontSize: "16px",
            }}
            variant="h6"
          >
          Date Of Birth
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter your DOB"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            type="date"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {
                    <CalendarMonthIcon
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
          </Grid>
          <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              paddingBottom: "10px",
              paddingTop: "0px",
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
          </Grid>
          <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
           <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              paddingBottom: "10px",
              paddingTop: "0px",
              fontSize: "16px",
            }}
            variant="h6"
          >
            Phone number
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter your Phone number"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            type="tel"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {
                    <PhoneIcon
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
          </Grid>
        
           <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "16px",
              paddingBottom: "10px",
              paddingTop: "0px",
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
          </Grid>
          
          <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
          <Typography
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "16px",
              paddingBottom: "10px",
              paddingTop: "0px",
            }}
            variant="h6"
          >
          Confirm Password
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Enter your Confirm-Password"
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
          </Grid>
          </Grid>
          <FormGroup style={{ marginTop: "10px" }}>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </FormGroup>
          <Button   onClick={() =>{
            navigate("/Loading")} }
            variant="outlined"
            style={{
              width: "120px",
              alignself: "flex-start",
              marginTop: "10px",
              textTransform: "none",
            } 
          
          
          
          }

            
          >
            Register
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
