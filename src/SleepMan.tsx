import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './SleepMan.css'
import { Button } from './elements/ui/button'

function SleepMan() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Button onClick={()=> setCount((c)=> c+1) }>Click me. count is {count}</Button>
      </div>
    </>
  )
}

export default SleepMan
