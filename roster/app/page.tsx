"use client"

import { XProvider } from './components/contextX'
import BasicCalculator from './components/basicCalculator'
import Testing from './components/testing'
import Timetable from './components/timetable'



export default function Home() {

  return (
    <main className="flex flex-col  justify-center p-2">

      <XProvider>
        <BasicCalculator />
      </XProvider>

      <div className='text-black bg-green-100'>

        <Timetable />
      </div>

    </main >
  )
}
