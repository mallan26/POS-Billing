import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import EditProducts from './EditProducts'
import {startGetRemove} from '../../Actions/Products-Action'
import CartContainer from '../Billing-Component/CartContainer'
import {Link} from 'react-router-dom'


export default function ProductsItem({_id, name, price}){
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        dispatch(startGetRemove(_id))
    }
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const saleItems = () => {
        return <CartContainer/>
    }

    return (
        <div>
            {
                toggle ? (
                    <div>
                        <EditProducts id={_id} name={name} price={price} handleToggle={handleToggle} />
                        <button onClick={handleToggle}> Cancel </button>
                    </div>
                ) : (
                    <blockquote>
                        <h3> Name : {name} </h3>
                        <h4> Price - {price} </h4>
                        <button onClick={handleToggle}> Edit </button>
                        <button onClick={handleRemove}> Remove </button>
                        {/* <button onClick={saleItems}> Buy </button> */}
                        {/* <Link onClick={`/cartcontainer/${_id}`} > Buy </Link> */}
                    </blockquote>
                )
            }
        </div>
    )
}