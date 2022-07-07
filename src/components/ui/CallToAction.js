import React from "react";
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery  from "@material-ui/core/useMediaQuery";


import ButtonArrow from "./ButtonArrow"

import background from "../../assets/background.jpg"
import mobileBackground from "../../assets/mobileBackground.jpg"

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em",
        },
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        backgroundAttachment: "fixed",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
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
}))
export default function CallToAction(props) {
    const classes =  useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid 
        container 
        alignItems="center" 
        className={classes.background} 
        justify={matchesSM ? "center" : "space-between"}
        direction={matchesSM ? "column" : "row"}
        >
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
    )
}