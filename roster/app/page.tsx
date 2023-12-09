"use client"
import Image from 'next/image'
import RosterEdit from './components/rosterEdit'
import RosterPreview from './components/rosterPreview'
import { XProvider } from './components/contextX'
import BasicCalculator from './basicCalculator'



export default function Home() {

  return (
    <main className="flex flex-col  justify-center p-2">

      <XProvider>
        <BasicCalculator />
      </XProvider>

    </main >
  )
}
