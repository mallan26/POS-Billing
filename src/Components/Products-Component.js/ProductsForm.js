import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startAddProduct, startGetEdit } from '../../Actions/Products-Action'

export default function ProductsForm({id, name:product, price:amount, handleToggle}){
    const dispatch = useDispatch()
    const [name, setName] = useState(product ? product : '')
    const [price, setPrice] = useState(amount ? amount : '')
    const [formErrors, setFormErrors] = useState({})
    const error = {}

    const handleChange = (e) => {
        const input = e.target.name
        if(input === 'product'){
            setName(e.target.value)
        } else if (input === 'price') {
            setPrice(e.target.value)
        }
    }

    const runValidations = () => {
        if(name.length === 0) {
            error.name = "Product Name Cannot be Blank"
        }

        if(price.length === 0 ) {
            error.price = "Enter Product Price"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

       // console.log(formData)
        runValidations()

        if(Object.keys(error).length === 0){
            setFormErrors({})
            const formData = {
                name: name,
                price: price
            }

            if(handleToggle){
                dispatch(startGetEdit(formData, id))
                handleToggle()
            } else {
                dispatch(startAddProduct(formData))
            }
            //console.log(formData)
            setName('')
            setPrice('')
            
        } else {
            setFormErrors(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       value = {name}
                       onChange={handleChange} 
                       placeholder="Product Name"
                       name="product"/>
                       <br/>
    

                <input type="text" 
                       value = {price}
                       onChange={handleChange} 
                       placeholder="Product Price"
                       name="price"/>
                       <br/>  
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}