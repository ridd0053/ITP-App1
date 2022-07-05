import React from "react";
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import animationData from "../animations/landinganimation/data"
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg" 
import ButtonArrow from "../components/ui/ButtonArrow"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop:"5em",
        [theme.breakpoints.down('md')]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "2em",
        },
    },
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop:"2em",
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "30em",
        },
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        marginRight: 40,
        height: 45,
        width: 145,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,

    },
    buttonContainer: {
        marginTop:"1em",
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "1em",
    }

}))
export default function LandingPage(props) { 
    const classes = useStyles()
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/* Hero block*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">
                            Bringing West Cost Technology <br /> to the Midwest
                        </Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined" className={classes.learnButtonHero}>
                                <span style={{marginRight: 10}}> Learn More </span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid> {/* End Hero block*/}
            <Grid item> {/* Services block --- Custom Software Development*/}
                <Grid container direction="row">
                    <Grid item>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solution, from investigation to {" "} 
                            <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={CustomSoftwareIcon} alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block*/}
        </Grid>
       
    );
}