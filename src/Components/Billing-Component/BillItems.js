import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {startRemoveBill} from '../../Actions/Bill-Action' 

export default function BillItems({_id, date, customer, lineItems, total}) {
    const dispatch = useDispatch()
    const products = useSelector((state) => {
        return state.products
    })

      // remove function 
      const handleRemove = ()=>{
        const confirmation = window.confirm("Are you sure ")
        if(confirmation){
            dispatch(startRemoveBill(_id))
        }
    }

    return (
        <div>
            <blockquote>
            <h4> Date - {date} </h4>
            <h4> Customer - {customer} </h4>
            <h4> lineItems : {lineItems.map((ele) => {
                return <ul key={ele._id}> 
                <li> product - {ele.product} </li>
                <li> Quntity - {ele.quantity} </li>
                <li> subTotal - {ele.subTotal} </li>
                </ul>
            })}
            </h4>
            <h4> Total - {total} </h4>
            <button onClick={handleRemove}>Remove</button>
            </blockquote>
        </div>
    )
}