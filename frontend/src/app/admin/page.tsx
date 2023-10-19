import Link from "next/link"
import { prisma } from "@/db"
import { getAdmin } from '../lib/admin'

async function setOptions(data: FormData) {
    "use server"
const message = data.get("message")?.valueOf()
const website = data.get("website")?.valueOf()
const displayOption = data.get("displayOption")?.valueOf()
console.log(displayOption)
console.log( message )
console.log( website )
if (typeof message !== "string" || message.length === 0) {
    throw new Error("Invalid Message");
} 
if (typeof website !== "string" || message.length === 0) {
    throw new Error("Invalid Message");
} 
//check website against regex of website format
//this section is kinda buggy if no inputs entered

await prisma.admin.update({where: {id: '7a548596-d0ac-4897-9d42-1e29dbb049a4',}, data: {displayOption: displayOption, message: message, website: website }})

}

export default async function page() {
    const Admin = await getAdmin()
    return <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2x1">Admin</h1>
    </header>
    <form action={setOptions} className="flex gap-2 flex-col">
        <select name="displayOption" className="border border-slate-300 bg-transparent rounded">
            <option className="bg-transparent rounded focus-within:border-slate-100" value="message">Message</option>
            <option className="bg-transparent rounded focus-within:border-slate-100"value="website">Website</option>
        </select>

        <label htmlFor="message">Message to Display</label>
        <input type="text" name="message" placeholder={Admin.message} className="border border-slat300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
        <label htmlFor="website">Website to Display</label>
        <input type="text" name="website" placeholder={Admin.website} className="border border-slat300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
        
        <div className="flex gap-1 justify-end">
            <Link href=".."  className="border border-slat300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100">Cancel</Link>
            <button type="submit" className="border border-slat300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100">
                create
            </button>
        </div>
    </form>
    </>
}