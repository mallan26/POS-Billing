import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from '../Components/User-Components/Home'
import Register from './User-Components/Register'
import SignIn from './User-Components/SignIn'
import Account from './User-Components/Account'
import Customers from './Customers-Component.js/Customers'
import Products from './Products-Component.js/Products'
import Billing from './Billing-Component/Billing'
import Analytics from './Analytics-Component/Analytics'
import { clearStore } from '../Actions/Register-Action'
import {Box, Typography, Container, Button, Paper, Toolbar, InputAdornment, AppBar} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import CartConatiner from './Billing-Component/CartContainer'
import BillContainer from './Billing-Component/BillContainer'

const useStyles = makeStyles((theme) => ({
    sectionDesktop:{
        display:"none",
        [theme.breakpoints.up("md")] : {
            display : "flex",
        }
    }
}))

const NavBar = ({ loggedIn, handleLoggedIn, history}) => {

    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <div>
            <AppBar>
                <Toolbar> 
                    <Typography variant="h3" style={{flexGrow:1}}> Billing App </Typography>
           
                {/* <li><Link to='/'>  Home </Link></li> */}
                <div className={classes.sectionDesktop}>
                <Button color="inherit" component={Link} to='/'> Home </Button>
                </div>
                {
                    loggedIn ? (
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" component={Link} to='/account'> Account </Button>
                        <Button color="inherit" component={Link} to='/customers'> Customers </Button>
                        <Button color="inherit" component={Link} to='/products'> Products </Button>
                        <Button color="inherit" component={Link} to='/billing'> Billing </Button>
                        <Button color="inherit" component={Link} to='/analytics'> Analytics </Button>
                        <Button color="inherit" component={Link} to='/' onClick={() => {
                            dispatch(clearStore())
                            localStorage.removeItem('token')
                            alert('you are successfully logged out')
                            handleLoggedIn()
                            history.push('/')  
                        }}> Log out </Button>
                        
                        {/* <li> <Link to='/account'> Account </Link> </li>
                        <li> <Link to='/customers'> Customers </Link></li>
                        <li> <Link to='/products'> Products </Link></li>
                        <li> <Link to='/billing'> Billing </Link></li>
                        <li> <Link to='/analytics'> Analytics </Link></li>
                        <li> <Link to='/' onClick={() => {
                            dispatch(clearStore())
                            localStorage.removeItem('token')
                            alert('you are successfully logged out')
                            handleLoggedIn()
                            history.push('/')  
                        }}> Log out </Link> </li> */}
                    </div>
                    ) : (
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" component={Link} to='/sign-in'> Sign-in</Button>
                        <Button color="inherit" component={Link} to='/register'> Register</Button>
                        {/* <li> <Link to='/sign-in'> Sign in </Link></li>
                        <li> <Link to='/register'> Register </Link></li> */}
                    </div>
                    )}
                    </Toolbar>
           </AppBar>

            <Route path='/' component={Home} exact={true} />
            <Route path='/register' component={Register} />
            <Route path='/account' component={Account} />
            <Route path='/customers' component={Customers} />
            <Route path='/products' component={Products} />
            <Route path='/analytics' component={Analytics} />
            <Route path='/billing' component={Billing} />
            <Route path='/sign-in' render={(props) => {
                return <SignIn {...props} handleLoggedIn={handleLoggedIn}/>
            }} />

            <Route path='/cartConatiner/:id' component={CartConatiner}/>
            <Route path='/billContainer' component={BillContainer}/>
            
        </div>
    )
}
export default withRouter(NavBar)