import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Cart from './Cart'
import ProductsPurchase from './ProductsPurchase'
import {startGetProductList} from '../../Actions/Products-Action'
import {addItems} from '../../Actions/Cart-Action'

export default function CartContainer(props){
    const [cartItems , setCartItems] = useState([])
    const {id} = props.match.params
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startGetProductList())
    }, [dispatch])

    const addItem = (product) => {
        const exist = cartItems.find(ele=>ele._id === product._id)
        if(exist){
            setCartItems(
                cartItems.map(ele=>ele._id === product._id ? {...ele, quantity : exist. quantity+1} : ele)
            )
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }
    const removeItem = (product) => {
        const exist = cartItems.find(ele=>ele._id === product._id)
            if(exist.quantity === 1){
                setCartItems(
                    cartItems.filter(ele=>ele._id !== product._id)
                )
            } else {
                setCartItems(
                    cartItems.map(ele=> ele._id === product._id ? {...ele, quantity : exist.quantity - 1}: ele)
                )
            }
    }
    const handleCheckOut = () => {
        const confirmation = window.confirm("Proceed to Billing ?")
        if(confirmation){
            dispatch(addItems(cartItems))
        }
    }
    return (
        <div> 
            <h4> Cart Items </h4>
            <ProductsPurchase addItem={addItem}/>
            <Cart cartItems={cartItems} addItem={addItem} handleCheckOut={handleCheckOut}
            removeItem={removeItem} CustomerId={id}/>

        </div> 
    )
}