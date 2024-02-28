import { useState } from 'react';
import './App.css';
import { Headline, Large, Medium, Small, SmallCentered } from './components/TopBarTitle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SmallCentered title="Small Centered" isCentered={true} />
      <Small title="Small" />
      <Medium title="Medium" />
      <Large title="Large" />
      <Headline title="Headline" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
