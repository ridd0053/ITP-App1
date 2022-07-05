import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: "21em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "15em",
        },
    },
    mainContainer: {
        position: "absolute",
        marginLeft: "1.5rem"
    },
    link: {
        color: "white",
        fontFamily:"Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
    },
    icon: {
        width: "4em",
        height: "4em",
        [theme.breakpoints.down('md')]: {
            width: "2.5em",
            height: "2.5em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "1.75em",
            height: "1.75em",
        },
   
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down('xs')]: {
            right: "0.6em",
        },
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/" onClick={() => props.setTabindex(0)}>
                            Home 
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link}  to="/services" onClick={() => {props.setTabindex(1); props.setSelectedIndex(0)}}>
                                Services
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/customsoftware" onClick={() => {props.setTabindex(1); props.setSelectedIndex(1)}}>
                                Custom Sofware Development
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/mobileapps" onClick={() => {props.setTabindex(1); props.setSelectedIndex(2)}}>
                            iOS/Android App Development
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/websites" onClick={() => {props.setTabindex(1); props.setSelectedIndex(3)}}>
                            Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setTabindex(2)}>
                                The Revolution
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setTabindex(2)}>
                                Vission
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setTabindex(2)}>
                                Technology
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setTabindex(2)}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setTabindex(3)}>
                                About us
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setTabindex(3)}>
                                History
                            </Grid>
                            <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setTabindex(3)}>
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} to="/contact" onClick={() => props.setTabindex(4)}>
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img src={footerAdornment} alt="black decorative slash" className={classes.adornment} />
            <Grid container justify="flex-end" className={classes.socialContainer} spacing={2}>
                <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank" >
                    <img alt="facebook logo" src={facebook} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon}  />
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src={instagram} className={classes.icon}  />
                </Grid>
            </Grid>
        </footer>
    )

}