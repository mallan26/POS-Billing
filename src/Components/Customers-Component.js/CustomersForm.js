import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { startAddCustomers, startGetEdit } from '../../Actions/Customers-Action'

export default function CustomersForm({id, name:Customer, mobile:contact, email:mail, handleToggle}){
    const dispatch = useDispatch()
        const [name, setName] = useState(Customer ? Customer : '')
        const [mobile, setMobile] = useState(contact ? contact : '')
        const [email, setEmail] = useState(mail ? mail : '')

        const handleChange = (e) => {
            const input = e.target.name
            if(input === "name") {
                setName(e.target.value)
            } else if (input === "mobile"){
                setMobile(e.target.value)
            } else if(input === "email"){
                setEmail(e.target.value)
            }
        }

        const handleSubmit = (e) => {
            e.preventDefault()

            const formData = {
                name : name,
                mobile : mobile,
                email : email
            }

            if(handleToggle){
                dispatch(startGetEdit(formData, id))
                handleToggle()
            } else {
                dispatch(startAddCustomers(formData))
            }
            setName('')
            setMobile('')
            setEmail('')
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Enter Customer name"
                       value = {name}
                       name = "name"
                       onChange={handleChange}
                       /> <br/>

                <input type="text"
                        placeholder="Enter Mobile Number"
                        value = {mobile}
                        name="mobile"
                        onChange={handleChange}/> <br/>

                <input type="text"
                        placeholder="Enter Email Id"
                        value = {email}
                        name="email"
                        onChange={handleChange}/> <br/>

                <input type="Submit" />
            </form>
        </div>
    )
}
