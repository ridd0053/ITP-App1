import React from "react";
import Lottie from "react-lottie"
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden"

import backArrow from "../assets/backArrow.svg"
import forwardArrow from "../assets/forwardArrow.svg"
import lightbulb from "../assets/bulb.svg"
import cash from "../assets/cash.svg"
import stopwatch from "../assets/stopwatch.svg"
import root from "../assets/root.svg"

import documentsAnimation from "../animations/documentsAnimation/data"
import scaleAnimation from "../animations/scaleAnimation/data"
import automationAnimation from "../animations/automationAnimation/data"
import uxAnimation from "../animations/uxAnimation/data"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em",
    }, 
    heading: {
        maxWidth: "40em",
    },
    arrowContainer: {
        marginTop: "0.5em",
    },
    itemContainer: {
        maxWidth: "40em",
    }
}))

export default function CustomSoftware(props) { 
    const classes =  useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row" justify={matchesMD ? "center" : undefined}> {/* Header */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  to="/services" onClick={() => {props.setTabindex(1); props.setSelectedIndex(0)}}>
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">
                            Custom Software
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Whether we're replacing old software or inventing new solutions, Arc Development
                            is here to help your business tackle technology. 
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Using regular commercial software leaves you with a lot of stuff you don’t need,
                            without some of the stuff you do need, and ultimately controls the way you work.
                            Without using any software at all you risk falling behind competitors and missing
                            out on huge savings from increased efficiency. 
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Our custom solutions are designed from the ground up with your needs, wants,
                            and goals at the core. This collaborative process produces finely tuned software
                            that is much more effective at improving your workflow and reducing costs than
                            generalized options.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            We create exactly what you what, exactly how you want it
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  to="/mobileapps" onClick={() => {props.setTabindex(1); props.setSelectedIndex(2)}}>
                            <img src={forwardArrow} alt="Forward to iOS/Android App Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid> {/* End Header */}
            <Grid item container direction="row" justify="center" style={{marginTop: "10em", marginBottom: "15em"}}> {/* Icons */}
                <Grid item container direction="column" md style={{maxWdith: "40em"}} alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Save Engergy
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbuld" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md style={{maxWdith: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}} alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Save Money
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md style={{maxWdith: "40em"}} alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Save Time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
            </Grid> {/* End Icons */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justify="space-between"> {/* Animations */}
                <Grid item container className={classes.itemContainer} md style={{marginBottom: matchesMD ? "15em" : 0}}> {/* Digital Documents and Data */}
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Digital Documents { "& "} Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Reduce Errors. Reduce Waste.
                                Reduce Costs.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Billions are spent annually on the
                                purchasing, printing, and distribution
                                of paper. On top of the massive
                                environmental impact this has, it
                                causes harm to your bottom line as
                                well. 
                            </Typography>
                            <Typography variant="body1" paragraph>
                                By utilizing digital forms and
                                documents you can remove these
                                obsolete expenses, accelerate your
                                communication, and help the Earth. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 275, maxWidth:275, minHeight:250}} />
                    </Grid>
                </Grid> {/* End Digital Documents and Data*/}
                <Grid item container className={classes.itemContainer} md> {/* Scale*/}
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth:280}} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align="right">
                                Whether you're a large brand, just getting started,
                                or taking off right now, our application
                                architecture ensures pain-free growth and
                                reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid> {/* End Scale*/}
            </Grid> {/* End Animations */}
            <Grid item container direction="row"  style={{marginTop: "20em", marginBottom:"20em"}}> {/* Root */}
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={root} alt="tree with roots extending out" height="400em" width="400em" />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Root-Cause Analysis
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            Many problems are merely
                            symptoms of larger, underlying
                            issues
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            We can help you thoroughly
                            examine all areas of your business
                            to develop a holistic plan for the
                            most effective implementation of
                            technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid> {/* End Root */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justify="space-between" style={{marginBottom:"10em"}}> {/* Second Animations */}
                <Grid item container className={classes.itemContainer} md style={{marginBottom: matchesMD ? "15em" : 0}}> {/* Automation */}
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Why waste time when you don't have to? 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                We can help you identify processes with
                                time or event based actions which can now
                                easily be automated. 
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Increasing efficiency increases profits,
                                leaving you more time to focus on your
                                business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} style={{maxHeight: 290, maxWidth:280}} />
                    </Grid>
                </Grid> {/* End Automation*/}
                <Grid item container className={classes.itemContainer} md> {/* User Experience Design*/}
                    <Grid item md>
                        <Lottie options={uxOptions} style={{maxHeight: 310, maxWidth:155}} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align="right">
                                A good design that isn't usable
                                isn't a good design. 
                            </Typography>
                            <Typography variant="body1" paragraph align="right">
                                So why are so many pieces of software complicated, confusing,
                                and frustrating?  
                            </Typography>
                            <Typography variant="body1" paragraph align="right">
                                By prioritizing users and the real ways they interact with
                                technology we're able to develop
                                unique, personable experiences
                                that solve problems rather than
                                create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid> {/* End User Experience Design*/}
            </Grid> {/* End Second Animations */}
        </Grid>
    )

}