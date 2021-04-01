import React, { useState } from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { startGetData } from '../../Actions/Register-Action'
import {Box, Typography, Container, Button, Paper, TextField, InputAdornment} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root : {
        width: "100vw",
        height: "100wh",
        backgroundColor : theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    }
}))

export default function Register(props){

    const classes = useStyles()

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [address, setAddress] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const error = {}


    const handleChange = (e) => {
        const input = e.target.name
        if(input === 'username'){
            setUsername(e.target.value)
        } else if (input === 'email') {
            setEmail(e.target.value)
        } else if (input === 'password') {
            setPassword(e.target.value)
        } else if (input === 'businessName') {
            setBusinessName(e.target.value) 
        } else if (input === 'address') {
            setAddress(e.target.value)
        }
    }
    
    const runValidation = () => {
        if(username.trim().length === 0) {
            error.username = "Name Cannot be Blank"
        }

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

       // console.log(formData)
        runValidation()

        if(Object.keys(error).length === 0){
            setFormErrors({})
            const formData = {
                username: username,
                email: email,
                password: password,
                businessName : businessName,
                address : address
            }
            dispatch(startGetData(formData, props.history.push))
            console.log(formData)

            setUsername('')
            setEmail('')
            setPassword('')
            setBusinessName('')
            setAddress('')
        } else {
            setFormErrors(error)
        }
    }

    return (
        <div>
            <Container classes={classes.root}>
                <Paper component={Box} mx="auto" pt={1} width="30%">
                <Typography varient='h1' align="center">  Register Here !! </Typography>
                <Box component="form" mt={1} onSubmit={handleSubmit} align="center">
                <TextField   
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        label="Username"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment>
                                <AccountCircleIcon/>
                                </InputAdornment>
                            )
                        }}
                        type='text'
                       value={username}
                       placeholder='Enter Username'
                       onChange={handleChange} 
                       name = 'username'/> 
                       {formErrors.username && <span> {formErrors.username} </span>} 

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
                       {formErrors.password && <span> {formErrors.password} </span>}

                <TextField  
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        label="Business Name"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment>
                                    <StorefrontIcon/>
                                </InputAdornment>
                            )
                        }}
                        type='text'
                       value={businessName}
                       placeholder='Enter Business Name'
                       onChange={handleChange} 
                       name = 'businessName'/> 

                <TextField  
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        label="Address"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment>
                                    <LocationOnIcon/>
                                </InputAdornment>
                            )
                        }}
                        multiline rows={3}
                        type='text'
                       value={address}
                       placeholder='Enter Address'
                       onChange={handleChange} 
                       name = 'address'/> <br/>

                <Button type ='submit' value='submit' variant="contained" color="secondary"> Register </Button>
                
            </Box>
            {/* <form onSubmit={handleSubmit}>
                <input type='text'
                       value={username}
                       placeholder='Enter Username'
                       onChange={handleChange} 
                       name = 'username'/> 
                       {formErrors.username && <span> {formErrors.username} </span>}<br/>

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

                <input type='text'
                       value={businessName}
                       placeholder='Enter Business Name'
                       onChange={handleChange} 
                       name = 'businessName'/> <br/>

                 <input type='text'
                       value={address}
                       placeholder='Enter Address'
                       onChange={handleChange} 
                       name = 'address'/> <br/>

                <input type ='submit' value='submit'/>
            </form> */}
            </Paper>
            </Container>
        </div>
    )
}