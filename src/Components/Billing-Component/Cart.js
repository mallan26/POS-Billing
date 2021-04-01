import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({cartItems, addItem, handleCheckOut, removeItem, CustomerId}){
    const totalProductsPrice = cartItems.reduce((a,c)=>a+c.quantity * c.price,0)
    const totalAmount = (totalProductsPrice * 0.18)
    return (
        <div>
            <h3> Cart Items - {cartItems.length} </h3>
            {cartItems.length === 0 && "Cart is Empty"}
            {
                cartItems.map(ele => {
                    return (
                        <blockquote>
                            <h4> Product Name : {ele.product} </h4>
                            <h4> Product Price : {ele.price} </h4>
                            <button onClick={() =>{addItem(ele)}}> + </button> | 
                             {ele.quantity} | 
                            <button onClick={() =>{removeItem(ele)}}> - </button>
                            <h4> Quntity - {ele.quantity} </h4>
                        </blockquote>
                    )
                })}
                <h4> Sub Total : {totalProductsPrice} </h4>
                <h4> Total : {totalAmount} </h4>

                <button onClick={() => {handleCheckOut()}}> Check Out </button> |
                <Link to={{
                    pathname: '/billContainer',
                    Customerid : CustomerId
                }}> Generate Bill </Link>
        </div>
    )
}