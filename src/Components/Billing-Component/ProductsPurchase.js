import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductsPurchase({addItem}) {
    
    const products = useSelector(state => state.products)
    return (
        <div>
            <h2> Products Purchased = {products.length} </h2>
            {
                products.map(ele=> {
                    return <ProductsItem key={ele._id} product={ele} addItem={addItem}/>
                    })
                })
        </div>
    )
}