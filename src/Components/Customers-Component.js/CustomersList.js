import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomersItem from './CustomersItem'

export default function CustomersList () {
    const [search, setSearch] = useState('')
    
    const data = useSelector((state) => {
        return state.customers
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch =()=>{
        const result = data.filter(ele=>{
            return ele.name.toLowerCase().includes(search.toLowerCase())
        })
        return result
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <h2> Search Customer </h2>
            <form onSubmit={handleSubmit}>
            <input type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search Customer"
                    />
            </form>
            { handleSearch().map((ele)=> {
            return <CustomersItem key={ele._id} {...ele}/> })
        }
        </div>
    )
}