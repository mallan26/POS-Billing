import React, { useEffect } from 'react'
import CustomersForm from './CustomersForm'
import CustomersList from './CustomersList'
import { useDispatch } from 'react-redux'
import { startGetCustomertList } from '../../Actions/Customers-Action'

export default function Customers(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetCustomertList())
    },[])

    return (
        <div>
            <h2> Customers Component </h2>
            <CustomersForm/>
            <CustomersList/>
        </div>
    )
}