import React from 'react'
import { useSelector } from 'react-redux'
import CustomersItem from './CustomersItem'

export default function CustomersList () {
    
    const data = useSelector((state) => {
        return state.customers
    })
    return (
        <div>
            <h2> Customers List </h2>
            {
                data.map((ele) => {
                    return <CustomersItem key={ele._id} {...ele}/>
                })
            }
        </div>
    )
}