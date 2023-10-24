import Image from 'next/image'
import { prisma } from './lib/db'

export default async function Home() {

  const settings = await prisma.setting.findMany()
  return (
    <>
      <h1>Hi</h1>
      {settings.map(setting => ( 
        <li key={setting.id}>{setting.id}:<span>{setting.displayOption}</span> - <span>{setting.Data}</span></li>
      ))}
    </>
  )
}
