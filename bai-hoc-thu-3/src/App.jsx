import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Banner } from './components/banner'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeaderForNewYear } from './components/HeaderForNewYear'


import { Alu } from './components/NumberCard'
import { NumberCard } from './components/NumberCard'

function App() {
  const [count, setCount] = useState(0);

  const array = Array.from({ length: 100 }, (_, i) => i = i + 1)

  return (
    <>
      <Banner />
      <HeaderForNewYear />
      <Header />

      <Alu />
      <div style={{
        width: '531px',
        display: 'flex',
        flexFlow: 'row wrap',

      }}>
        {array.map((value, index) => (<NumberCard value={value} />))

        }
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Footer />
    </>
  )
}

export default App
