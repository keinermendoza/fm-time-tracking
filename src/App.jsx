import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './ui/Card'
import activities from './data/data.json'

function App() {
  const [count, setCount] = useState(0)
  return (
    <section className='grid gap-6 lg:grid-cols-4fr lg:grid-cols-2fr lg:w-full lg:max-w-5xl mx-auto'>
      {activities.map((activity, index) => (
        <Card
          key={index}
          title={activity.title}
          timeframes={activity.timeframes}
         />
      ))}
    </section>
  )
}

export default App
