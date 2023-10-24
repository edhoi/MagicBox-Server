"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"

const initState = {
    displayOption: "Message",
    Data: "",
}

export default function setting() {
    const [data, setData] = useState(initState)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //console.log(JSON.stringify(data))
        const { displayOption, Data } = data
        
        //should we purge and leave one setting?
        //await fetch('http://localhost:3000/api/purgeOption')
        //could create a fetch latest setting?


        // Send data to API route 
        const res = await fetch('http://localhost:3000/api/addOption', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                displayOption, Data
            })
        })

        const result = await res.json()
        console.log(result)

        // Navigate to thank you 
        //router.push(`/admin/`)
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {

        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const options = [
        {key: 1, label: "Message", value: "Message"},
        {key: 2, label: "Website", value: "Website"},
    ]

    const content = (
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto max-w-3xl p-6">
            <label className="text-2xl mb-1" htmlFor="displayOption">What to display:</label>


            <select name="displayOption" className="p-3 mb-6 text-2xl rounded-2xl text-black" htmlFor="displayOption" onChange={handleChange}>
                {options.map(option => (
                    <option key={option.key} value={option.label}>{option.label}</option>
                ))}
            </select>
            
            <label className="text-2xl mb-1" htmlFor="Data">Data:</label>
            <textarea
                className="p-3 mb-6 text-2xl rounded-2xl text-black"
                id="Data"
                name="Data"
                placeholder="Your Data here..."
                rows={5}
                cols={33}
                value={data.Data}
                onChange={handleChange}
            />

            <button type="submit"
                className="p-3 mb-6 text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-slate-300"
            >Submit</button>

        </form>
    )

    return content
}