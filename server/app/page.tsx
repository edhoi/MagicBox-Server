import Image from 'next/image'
import { prisma } from './lib/db'

export default async function Home() {

  const settings = await prisma.setting.findMany()

  //still need to impliment website 
    //switch depending on setting.displayOption on what to return
    /*
    switch (setting.displayOption) {
    case "website":
     return (<>
      <iframe src="setting.Data"> i dunno if this will work
      </iframe>
      </>)
    case "message":
      return (<>setting.Data</>)
    default:
      return (<><h1>Magic Box Default Message</h1></>);
  }
    */

  return (
    <>
      {settings.map(setting => ( 
        <li key={setting.id}>{setting.id}:<span>{setting.displayOption}</span> - <span>{setting.Data}</span></li>
      ))}
    </>
  )
}
