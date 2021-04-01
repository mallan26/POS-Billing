import React, { useEffect } from 'react'
import ProductsForm from './ProductsForm'
import ProductsList from './ProductsList'
import {useDispatch} from 'react-redux'
import { startGetProductList } from '../../Actions/Products-Action'

export default function Products(){
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(startGetProductList())
    }, [])

    return (
        <div>
            <h2> Products Component </h2>
            <ProductsForm/>
            <ProductsList/>
        </div>
    )
}
