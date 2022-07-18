import React, { useState } from "react";
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import emailjs from '@emailjs/browser';

import background from "../assets/background.jpg"
import mobileBackgrond from "../assets/mobileBackground.jpg"
import phoneIcon from "../assets/phone.svg"
import emailIcon from "../assets/email.svg"
import airplane from "../assets/send.svg"

import ButtonArrow from "./ui/ButtonArrow"

const useStyles = makeStyles(theme => ({ 
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackgrond})`,
        },
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em",
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        marginRight: "5em",
        marginLeft: "2em",
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5,
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down('sm')]: {
            height: 40,
            width: 225,
        },
    }
 }))

 export default function Contact(props) { 
    const classes = useStyles();
    const theme = useTheme();

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [emailHelper, setEmailHelper] = useState("")

    const [phone, setPhone] = useState("")
    const [phoneHelper, setPhoneHelper] = useState("")

    const [message, setMessage] = useState("")

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({open: false, message:"", backgroundColor:""})

    const isDisabled =
    name.length === 0 ||
    message.length === 0 ||
    phone.length === 0 ||
    email.length === 0 ||
    phoneHelper.length !== 0 ||
    emailHelper.length !== 0;

    const onChange = event => {
        let valid;
        switch(event.target.id) {
            case "email":
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if(!valid) {
                    setEmailHelper("Invalid email")
                }else {
                    setEmailHelper("")
                }
                break;
            case "phone":
                setPhone(event.target.value)
                valid = /^([0-9]{9,})$/.test(event.target.value)
                if(!valid) {
                    setPhoneHelper("Invalid phone")
                }else {
                    setPhoneHelper("")
                }
                break;
            default:
                break;
        }
    }

    const sendEmail = (e) => {
        setLoading(true)
        emailjs.send(process.env.REACT_APP_MY_SERVICE_ID, process.env.REACT_APP_MY_TEMPLATE_ID, {sort: "Contactform", name, email, phone, message}, process.env.REACT_APP_MY_PUBLIC_KEY).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setLoading(false)
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setOpen(false);
            setAlert({open: true, message:"Message send successfully", backgroundColor:"#4BB543"})

        }, function(error) {
            console.log('FAILED...', error);
            setLoading(false)
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setOpen(false);
            setAlert({open: true, message:"Something went wrong, please try again later", backgroundColor:"#FF3232"})
        });
    }

    const buttonContent = (
        <React.Fragment>
             Send Message
            <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}} />
        </React.Fragment>
    )


    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" style={{marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ?  "1em" : matchesMD ? "5em" : 0}} lg={4} xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{lineHeight: 1}}>
                                Contact Us
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: theme.palette.common.blue}}>
                                We're waiting.
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                                <a href="tel:12345678" style={{textDecoration: "none", color:"inherit"}}>12345678</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: "2em"}}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign:"bottom"}} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                                    <a href="mailto:test@test.com" style={{textDecoration: "none", color:"inherit"}}>test@test.com</a> 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{width: "20em"}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Name" id="name" value={name} fullWidth onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="E-mail" error={emailHelper.length !== 0} helperText={emailHelper} id="email" value={email} fullWidth onChange={onChange} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Phone" error={phoneHelper.length !== 0} helperText={phoneHelper} id="phone" value={phone} fullWidth onChange={onChange} />
                            </Grid>
                            <Grid item style={{width: "20em"}}>
                                <TextField 
                                value={message} 
                                id="message"
                                multiline 
                                rows={10}
                                fullWidth
                                className={classes.message}
                                InputProps={{disableUnderline: true}}
                                onChange={(event) => setMessage(event.target.value)} 
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" style={{marginTop: "2em"}}>
                            <Button variant="contained" 
                            disabled={isDisabled}
                            className={classes.sendButton}
                            onClick={() => setOpen(true)}
                            >
                                {buttonContent}
                            </Button>
                        </Grid>
                        <Dialog open={open} 
                        onClose={() => setOpen(false)} 
                        PaperProps={{style: {padding: matchesXS ? "1em 0" : matchesSM ? "1em 5em" : matchesMD ? "1em 15em" : "5em 25em"}}} 
                        style={{zIndex: 1302}}
                        fullScreen={matchesSM}
                        >
                            <DialogContent>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="h4" gutterBottom>
                                            Confirm message
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{marginBottom: "0.5em"}}>
                                        <TextField label="Name" id="name" value={name} fullWidth onChange={(event) => setName(event.target.value)} />
                                    </Grid>
                                    <Grid item style={{marginBottom: "0.5em"}}>
                                        <TextField label="E-mail" error={emailHelper.length !== 0} helperText={emailHelper} id="email" value={email} fullWidth onChange={onChange} />
                                    </Grid>
                                    <Grid item style={{marginBottom: "0.5em"}}>
                                        <TextField label="Phone" error={phoneHelper.length !== 0} helperText={phoneHelper} id="phone" value={phone} fullWidth onChange={onChange} />
                                    </Grid>
                                    <Grid item style={{width: matchesSM ? "100%" : "20em"}}>
                                        <TextField 
                                        value={message} 
                                        id="message"
                                        multiline 
                                        rows={10}
                                        fullWidth
                                        className={classes.message}
                                        InputProps={{disableUnderline: true}}
                                        onChange={(event) => setMessage(event.target.value)} 
                                        />
                                    </Grid>
                                    <Grid item container style={{marginTop: "2em"}} alignItems="center" direction={matchesSM ? "column" : "row"}>
                                        <Grid item>
                                            <Button color="primary" style={{fontWeight: 300}} onClick={() => setOpen(false)}>
                                                Cancel
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" 
                                                disabled={isDisabled}
                                                className={classes.sendButton}
                                                onClick={sendEmail}
                                                >
                                                   {loading ? <CircularProgress size={30} /> : buttonContent}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                        </Dialog>
                        <Snackbar 
                        open={alert.open} 
                        message={alert.message}
                        autoHideDuration={4000} 
                        anchorOrigin={{vertical:"top", horizontal:"center"}} 
                        ContentProps={{style: {backgroundColor: alert.backgroundColor}}} 
                        onClose={() => setAlert({...alert, open: false})}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column": "row"} className={classes.background} lg={8} xl={9} alignItems="center" justify={matchesMD ? "center" : undefined}>
                <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? "center" : undefined} gutterBottom>
                                Simple Software. <br /> Revolutionary Results.
                            </Typography>
                            <Typography variant="subtitle2" align={matchesMD ? "center" : undefined}  style={{ fontSize: "1.5rem" }} gutterBottom>
                                Take advantage of the 21st Century.
                            </Typography>
                            <Grid container item justify={matchesMD ? "center" : undefined}>
                                <Button variant="outlined" className={classes.learnButton} component={Link}  to="/revolution" onClick={() => {props.setTabindex(2);}}>
                                    <span style={{marginRight: 5}}> Learn More </span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.estimateButton} component={Link}  to="/estimate" onClick={() => {props.setTabindex(5);}}>
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}