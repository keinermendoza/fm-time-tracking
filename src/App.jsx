import { useState } from 'react'
import Card from './ui/Card'
import MainCard from './ui/MainCard'
import activities from './data/data.json'
import { validTimes } from './constants'

function App() {
  const [selectedTime, setSelectedTime] = useState(validTimes.weekly)

  return (
    <section className='grid gap-6 max-w-sm lg:grid-cols-4fr lg:grid-cols-2fr lg:w-full lg:max-w-5xl mx-auto'>
      <MainCard
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      {activities.map((activity, index) => (
        <Card
          key={index}
          title={activity.title}
          timeframes={activity.timeframes}
          selectedTime={selectedTime}
         />
      ))}
    </section>
  )
}

export default App
