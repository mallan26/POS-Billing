import React, { useState } from 'react'
import {startPostBill} from '../../Actions/Bill-Action'
import { useDispatch } from 'react-redux';

export default function BillForm ({CustomerId, Items}) {
    const dispatch = useDispatch()

    const [date, setDate] = useState('')
    const [customerId, setCustomerId] = useState(CustomerId ? CustomerId : '')
    console.log("customer id", CustomerId);

    const handleChange = (e) => {
        const input = e.target.name
        if(input === "date"){
            setDate(e.target.value)
        } else if(input === "id" ){
            setCustomerId(e.target.value)
        }  
    }

    const line = ()=>{
        const result = Items.map(ele=>{
            return {product : ele._id , quantity:ele.quantity}
        })
        return result
        console.log(result) 
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            date : date,
            customer : customerId,
            lineItems : line()
        }
        dispatch(startPostBill(formData))
    }

    return(
        <div>
            <h4> Enter Details </h4>
            
            <form onSubmit={handleSubmit}>
                <input type="date"
                       value={date}
                       onChange={handleChange} 
                       placeholder="YYYY-MM-DD"
                       name="date"/> <br/>

            <input type="text"
                       value={customerId}
                       onChange={handleChange} 
                       placeholder="customers"
                       name="id"/> <br/>

            <input type="submit" value="submit"/>

            </form>
        </div>
    )
}