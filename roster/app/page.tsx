import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Roster
      <div className='test'>
        <label>Choose a time for your meeting:</label>

        <input type="time" id="appt" name="appt" min="00:00" max="24:00" required />
      </div>
    </main>
  )
}
