import React from "react";
import { Link } from "react-router-dom"
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery  from "@material-ui/core/useMediaQuery";

import CallToAction from "./ui/CallToAction"

import animationData from "../animations/landinganimation/data"

import CustomSoftwareIcon from "../assets/Custom Software Icon.svg"
import MobileAppsIcon from "../assets/mobileIcon.svg" 
import WebsiteIcon from "../assets/websiteIcon.svg"

import revolutionBackground from "../assets/repeatingBackground.svg"
import informationBackground from "../assets/infoBackground.svg"

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
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em",
        },
    },
    buttonContainer: {
        marginTop:"1em",
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down('sm')]: {
            padding: 25,
        },
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "1em",
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down('sm')]: {
            padding: `8em ${0}`,
            borderRadius: 0,
            width: "100%",
        },
    },
    informationBackground: {
        backgroundImage: `url(${informationBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
    }
}))
export default function LandingPage(props) { 
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
                                <Button className={classes.estimateButton} variant="contained" component={Link}  to="/estimate" onClick={() => {props.setTabindex(5) }}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButtonHero} component={Link}  to="/revolution" onClick={() => {props.setTabindex(2)}}>
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
            <Grid item> {/* Services block  --- Custom software development */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ?  "center" : undefined}}>
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
                        <Button variant="outlined" className={classes.learnButton} component={Link}  to="/customsoftware" onClick={() => {props.setTabindex(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={CustomSoftwareIcon} alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- Custom software development*/}
            <Grid item> {/* Services block  --- iOS/Android App Development */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                        iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access, Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app
                            {matchesSM ? null : <br />} 
                            with either mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  to="/mobileapps" onClick={() => {props.setTabindex(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} src={MobileAppsIcon} alt="Mobile icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- iOS/Android App Development*/}
            <Grid item> {/* Services block  --- Website Development */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Enignes, built for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  to="/websites" onClick={() => {props.setTabindex(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={WebsiteIcon} alt="Website icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- Website Development */}
            <Grid item> {/* Revolution block */}
                <Grid container style={{height: "80em", marginTop: "12em"}} alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column">
                                <Grid item style={{textAlign: "center"}}>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item style={{textAlign: "center"}}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant="outlined" className={classes.learnButton} component={Link}  to="/revolution" onClick={() => {props.setTabindex(2)}}>
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid> {/* End Revolution block */}
            <Grid item> {/* Information block */}
                <Grid container direction="row" alignItems="center"  className={classes.informationBackground}>
                    <Grid item container style={{ textAlign: matchesXS ? "center" : "inherit" }} direction={matchesXS ? "column": "row"}>
                        <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}>
                            <Grid container direction="column" style={{marginBottom: matchesXS ? "10em" : 0 }}>
                                <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                                <Typography variant="subtitle2" gutterBottom>Let's get personal</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton} style={{color: "white", borderColor: "white"}} component={Link}  to="/about" onClick={() => {props.setTabindex(3);}}>
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                                <Typography variant="subtitle2" gutterBottom>Say hello!</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton} style={{color: "white", borderColor: "white"}} component={Link}  to="/contact" onClick={() => {props.setTabindex(4);}}>
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>{/* End Information block */}
            <Grid item> {/* Call To Action block */}
                <CallToAction setTabIndex={props.setTabIndex} />
            </Grid> {/* End Call To Action block */}
        </Grid>
     
    );
}