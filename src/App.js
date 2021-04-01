import React, { useEffect, useState } from 'react'
import NavBar from '../src/Components/NavBar'
import {Box, Typography, Container, Button, Paper, Toolbar, InputAdornment, AppBar} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root : {
      width: "100vw",
      height: "100wh",
      backgroundColor : theme.palette.grey[300],
      paddingTop: theme.spacing(2)
  }
}))


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const classes = useStyles() 

  const handleLoggedIn = () => {
    setLoggedIn(!loggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token'))
    handleLoggedIn()
  }, [])


  return (
    <div>
      <h2> App Component </h2>
      <Container className={classes.root}>
      <NavBar loggedIn={loggedIn} handleLoggedIn={handleLoggedIn} />
   

      </Container>
    </div>
  );
}
export default App