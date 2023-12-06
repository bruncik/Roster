import Image from 'next/image'
import RosterEdit from './components/rosterEdit'
import RosterPreview from './components/rosterPreview'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <RosterPreview />

      <div className='test text-red-700'>
        <RosterEdit />

      </div>
    </main>
  )
}
