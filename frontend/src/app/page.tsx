import { Message } from "./components/message"
import { Website } from "./components/website"
import Link from "next/link"
import { getAdmin } from './lib/admin'
import { prisma } from "@/db"


export default async function Home() {
  //await prisma.admin.create({data: {displayOption: 'message', message: 'TEST MESSAGE', website: 'HTTP://google.com'}})
  const Admin = await getAdmin()
  const id = Admin.id
  const displayOption = Admin.displayOption
  const website = Admin.website
  const message = Admin.message

  return (
    <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2x1">Magic Box</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/admin">Admin</Link>
    </header>
    <div>
      <p>
        <span>{id}</span>=<span>{displayOption}</span>-<span>{message}</span>-<span>{website}</span>
      </p>
      {(displayOption == "message" )?
      <li key={id}>{message}</li>
      :
      <li key={id}>{website}</li>
      }
    </div>
    </>
  )
}
