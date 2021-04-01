import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startGetAccountData} from '../../Actions/Account-Action'
import {Box, Typography, Container, Button, Paper, TextField, InputAdornment} from '@material-ui/core'
import {makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    sectionDesktop:{
        display:"none",
        [theme.breakpoints.up("md")] : {
            display : "flex",
            
        }
    }
}))

//theme = responsiveFontSizes(theme);

const theme = createMuiTheme({
    spacing: 4,

  });
  
  theme.spacing(2)

export default function Account () {
    const classes = useStyles()
    const dispatch = useDispatch()

    const result = useSelector((state) => {
        return state.account
    })
 
    useEffect(()=>{
        dispatch(startGetAccountData())
    },[])
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant="h3" fontWeight="fontWeightBold"  align="center" pt={2}> User Account </Typography>
                <Typography variant="h5">User - {result.username}</Typography>
                <Typography variant="h5">User Email - {result.email}</Typography>
                <Typography variant="h5">Business - {result.businessName}</Typography>
                <Typography variant="h5"> Place - {result.address}</Typography>
            </ThemeProvider>
            {/* <h2>  User Account </h2>
            <h2> User - {result.username} </h2>
            <h3> User Email - {result.email}</h3>
            <h3> Business - {result.businessName}</h3>
            <h3> Place - {result.address} </h3>
            <h3> User ID - {result._id} </h3> */}
            
        </div>
    )
}