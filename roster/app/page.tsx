"use client"
import Image from 'next/image'
import RosterEdit from './components/rosterEdit'
import RosterPreview from './components/rosterPreview'
import { XProvider } from './components/contextX'


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-24">

      <XProvider>
        <div>
          <RosterPreview />
        </div>
        <div className='test text-red-700'>
          <RosterEdit />
        </div>
      </XProvider>

    </main >
  )
}
