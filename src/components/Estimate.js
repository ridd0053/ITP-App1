import React, { useState } from "react";
import { cloneDeep } from 'lodash';
import { Link } from "react-router-dom"
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import useMediaQuery  from "@material-ui/core/useMediaQuery";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({
    icon: {
       width: "12em",
       height: "10em", 
    },
    estimateButton: {
        ...theme.typography.estimate, 
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize:"1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "2em",
        borderRadius: 5,
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize:  "1.5rem",
        color: theme.palette.common.orange
    },
}))
const defaultQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "phones and tablet outline",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    },
]
const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iPhone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: usersIcon,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
  ];
  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];


export default function Estimate(props) { 
    const classes =  useStyles();
    const theme = useTheme();

    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false); 

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [emailHelper, setEmailHelper] = useState("")

    const [phone, setPhone] = useState("")
    const [phoneHelper, setPhoneHelper] = useState("")

    const [message, setMessage] = useState("")

    const [total, setTotal] = useState(0);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1
        const nextIndex = activeIndex + 1
        newQuestions[activeIndex] = {...currentlyActive[0], active: false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}
        setQuestions(newQuestions)
    }

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1
        const nextIndex = activeIndex - 1
        newQuestions[activeIndex] = {...currentlyActive[0], active: false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}

        setQuestions(newQuestions)
    }

    const navigationPreviousDisabled = () => {
        const currentlyActive = questions.filter(question => question.active)

        if( currentlyActive[0].id === 1 ) {
            return true
        } else {
            return false
        }
    }

    const navigationNextDisabled = () => {
        const currentlyActive = questions.filter(question => question.active)

        if( currentlyActive[0].id === questions[questions.length - 1].id ) {
            return true
        } else {
            return false
        }
    }

    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0].options.filter(option => option.selected)
        switch(currentlyActive[0].subtitle) {
            case 'Select one.':
                if(previousSelected[0]) {
                    previousSelected[0].selected = !previousSelected[0].selected
                }
                newSelected.selected = !newSelected.selected
                break;
            default:
                newSelected.selected = !newSelected.selected
                break;
        }

        switch(newSelected.title) {
            case "Custom Software Development":
                setQuestions(softwareQuestions)
                break;
            case "iOS/Android App Development":
                setQuestions(softwareQuestions)
                break;
            case "Website Development":
                setQuestions(websiteQuestions)
                break;
            default:
                setQuestions(newQuestions)
                break;
        }

    }

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

    const getTotal = () => {
        let cost = 0;

        const selections = questions.map(question => question.options.filter(option => option.selected)).filter(
            question => question.length >  0
        );
        const sumGo= ["0-10", "10-100", "100+"]
 
        selections.map(options=> options.map(option =>  sumGo.includes(option.title) ? 
            cost *= option.cost : cost += option.cost))


        setTotal(cost)
        console.log(selections)
    }

    return (
        <Grid container direction="row">
            {/* Questions */}
            <Grid item container direction="column" lg>
                <Grid item style={{marginTop: "2em", marginLeft:"5em"}}>
                    <Typography variant="h2">
                        Estimate
                    </Typography>
                </Grid>
                <Grid item style={{marginRight: "10em", maxWidth: "50em", marginTop:"7.5em"}}>
                    <Lottie options={defaultOptions} width="100%" height="100%"/>
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" lg style={{marginRight: "2em", marginBottom:"25em"}}>
                {questions.filter(question => question.active).map((question, index) => (
                    <React.Fragment key={index}>
                        <Grid item>
                            <Typography variant="h2" align="center" style={{fontWeight: 500, marginTop:"5em", fontSize:"2.25rem", lineHeight:1.25}}>
                                {question.title}
                            </Typography>
                            <Typography variant="body1" align="center" style={{marginBottom: "2.5em"}} gutterBottom>
                                {question.subtitle}
                            </Typography>
                        </Grid>
                        <Grid item container>
                            {question.options.map(option => (
                                <Grid item container direction="column" md key={option.id} component={Button} onClick={() => handleSelect(option.id)} 
                                style={{display: "grid", textTransform:"none", borderRadius: 0, backgroundColor: option.selected ? theme.palette.common.orange : null}}>
                                    <Grid item style={{maxWidth: "14em"}}>
                                        <Typography variant="h6" align="center" style={{marginBottom: "1em"}}>
                                            {option.title}
                                        </Typography>
                                        <Typography variant="caption" align="center">
                                            {option.subtitle}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </React.Fragment>
                ))}
    
                <Grid item container justify="space-between" style={{width: "18em", marginTop:"3em"}}>
                    <Grid item>
                        <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
                            <img src={navigationPreviousDisabled() ? backArrowDisabled : backArrow} alt="Previous question" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
                          <img src={navigationNextDisabled() ? forwardArrowDisabled : forwardArrow} alt="Next question" />  
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item >
                    <Button variant="contained" onClick={() => {setDialogOpen(true); getTotal()}} className={classes.estimateButton}>
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} style={{zIndex: 1302}}>
                <DialogTitle>
                    <Grid container justify="center">
                        <Grid item>
                            <Typography variant="h2" align="center">
                                Estimate
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item container direction="column">
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Name" id="name" value={name} fullWidth onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="E-mail" error={emailHelper.length !== 0} helperText={emailHelper} id="email" value={email} fullWidth onChange={onChange} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Phone" error={phoneHelper.length !== 0} helperText={phoneHelper} id="phone" value={phone} fullWidth onChange={onChange} />
                            </Grid>
                            <Grid item style={{maxWidth: "20em"}}>
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
                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    We can create this digital solution for an estimated 
                                    <span className={classes.specialText}>{" "}€{total.toFixed(2)}</span>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Fill out your name, phone number and email, place your request and we'll get back to you with details moving forward and a final price.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

