import React from 'react'
import ProductsForm from './ProductsForm'

export default function editProduct({id, name, price, handleToggle}) {

    return (
        <div> <ProductsForm name={name} 
                            price={price} 
                            id={id}
                            handleToggle={handleToggle}/> </div>
    )
}
