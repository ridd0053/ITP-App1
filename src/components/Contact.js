import React, { useState } from "react";
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../assets/background.jpg"
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
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
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
        [theme.breakpoints.down('sm')]: {
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
    }
 }))

 export default function Contact(props) { 
    const classes = useStyles();
    const theme = useTheme();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" lg={4}>
                <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1}}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" style={{color: theme.palette.common.blue}}>
                        We're waiting.
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                            12345678
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign:"bottom"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                            test@test.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{maxWidth: "20em"}}>
                    <Grid item>
                        <TextField label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="E-mail" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="Phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: "20em"}}>
                    <TextField 
                    value={message} 
                    id="message"
                    multiline 
                    rows={10}
                    className={classes.message}
                    InputProps={{disableUnderline: true}}
                    onChange={(event) => setMessage(event.target.value)} 
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.sendButton}>
                        Send Message 
                        <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}} />
                    </Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={8} alignItems="center">
                <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" gutterBottom>
                                Simple Software. <br /> Revolutionary Results.
                            </Typography>
                            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }} gutterBottom>
                                Take advantage of the 21st Century.
                            </Typography>
                            <Grid container item justify={matchesSM ? "center" : undefined}>
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