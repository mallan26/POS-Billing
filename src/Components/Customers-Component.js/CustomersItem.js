import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import EditCustomers from './EditCustomers'
import { startGetRemove } from '../../Actions/Customers-Action'
import CartContainer from '../Billing-Component/CartContainer'
import { Link } from 'react-router-dom'

export default function CustomersItem({_id, name, mobile, email}){
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        dispatch(startGetRemove(_id))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            {
                toggle ?  (
                <div> 
                    <EditCustomers id={_id} name={name} mobile={mobile} email={email} handleToggle={handleToggle}/>
                    <button onClick={handleToggle}> Cancel </button> 
                </div>
                ) : (
                <blockquote>
                    <h3> Name - {name} </h3>
                    <h4> Mobile - {mobile} </h4>
                    <h4> Email - {email} </h4>
                    <h4> Id - {_id} </h4>
                    {/* <CardActions>
                                <Button onClick ={handleRemove}>Remove</Button>
                                <Button onClick = {handleToggle}>Edit</Button>
                                <Button  component={Link} to={`/cartContainerontainer/${_id}`}>BuyItems</Button>
                            </CardActions> */}
                    <button onClick={handleToggle}> Edit </button>
                    <button onClick={handleRemove}> Remove </button>
                    <Link to={`/cartConatiner/${_id}`}> Buy </Link>
                </blockquote>
                )
            }
        </div>
    )
}