"use client"
import Image from 'next/image'
import RosterEdit from './components/rosterEdit'
import RosterPreview from './components/rosterPreview'
import { XProvider } from './components/contextX'
import TotalHours from './components/totalHours'


export default function Home() {

  return (
    <main className="flex flex-col  justify-center p-2">

      <XProvider>
        <div className='test text-red-700 flex justify-center'>
          <RosterEdit />
          <TotalHours />
        </div>
        <div>
          <RosterPreview />
        </div>
      </XProvider>

    </main >
  )
}
