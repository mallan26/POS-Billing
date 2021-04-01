import React from 'react'
import { useSelector} from 'react-redux'
import ProductsItem from './ProductsItem'

export default function ProductsList(){

    const data = useSelector((state) => {
        return state.products
    })
    return (
        <div> { data.map((ele)=> {
            return <ProductsItem key={ele._id} {...ele}/> })
        }
         </div>
    )
} 