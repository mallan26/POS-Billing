import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import {Box, Typography, Container, Button, Paper, TextField, InputAdornment} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';  
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
    root : {
        width: "100vw",
        height: "100wh",
        backgroundColor : theme.palette.grey[300],
        paddingTop: theme.spacing(2)
    }
}))


export default function SignIn(props){

    const classes = useStyles()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const error = {}


    const handleChange = (e) => {
        const input = e.target.name
        if (input === 'email') {
            setEmail(e.target.value)
        } else if (input === 'password') {
            setPassword(e.target.value)
        }
    }

    const runValidation = () => {
        if(email.trim().length === 0 ) {
            error.email = "Email Cannot be blank"
        } else if ( !(validator.isEmail(email))){
            error.email = "Invalid Email Format"
        }

        if(password.trim().length === 0) {
            error.password = "Password Cannot be Blank"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if(Object.keys(error).length === 0){
            setFormErrors({})

            const formData = {
                email: email,
                password: password,
            }
            axios.post('http://dct-billing-app.herokuapp.com/api/users/login', formData)
            .then((response) => {
                const result = response.data
                if(Object.keys(result).includes('errors')){
                    alert(result.errors)
                } else {
                    alert('successfully logged in')
                    localStorage.setItem('token', result.token)
                    props.history.push('/account')
                    props.handleLoggedIn()
                    console.log(result)
                } 
            })

            setEmail('')
            setPassword('')
        } else {
            setFormErrors(error)
        }}

    return (
        <div>
             <Container classes={classes.root}>
                <Paper component={Box} mx="auto" pt={1} width="30%">
                <Typography varient='h1' align="center" my="3">  Sign-in ! </Typography>
                <Box component="form" p={2} onSubmit={handleSubmit}  align="center">

                <TextField 
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        label="Email"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment>
                                    <EmailIcon/>
                                </InputAdornment>
                            )
                        }}
                        type='text'
                       value={email}
                       placeholder='Enter Email Id'
                       onChange={handleChange} 
                       name = 'email'/> 
                       {formErrors.email && <span> {formErrors.email} </span>}

                <TextField 
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        label="Password"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment>
                                    <LockIcon/>
                                </InputAdornment>
                            )
                        }}
                        type='password'
                       value={password}
                       placeholder='Enter Password'
                       onChange={handleChange} 
                       name = 'password'/> 
                       {formErrors.password && <span> {formErrors.password} </span>} <br/>

                       <Button type ='submit' value='submit' variant="contained" color="secondary"> sign-in </Button>

                </Box>
                </Paper>
            </Container>
            {/* <h3> Sign-in Component </h3>
            <form onSubmit={handleSubmit}>
            <input type='text'
                       value={email}
                       placeholder='Enter Email Id'
                       onChange={handleChange} 
                       name = 'email'/> 
                       {formErrors.email && <span> {formErrors.email} </span>}<br/>

                <input type='password'
                       value={password}
                       placeholder='Enter Password'
                       onChange={handleChange} 
                       name = 'password'/> 
                       {formErrors.password && <span> {formErrors.password} </span>}<br/>
                <input type='submit'/>
            </form> */}
        </div>
    )
}