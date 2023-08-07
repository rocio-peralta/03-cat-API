import React, { useEffect, useState } from 'react'

const FACT_ENDPOINT = 'https://catfact.ninja/fact'
export function App() {
  const [fact, setFact] = useState()
  useEffect(() => {
    fetch(FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
  }, [])

  function handleClick() {
   
      fetch(FACT_ENDPOINT)
        .then((res) => res.json())
        .then((data) => setFact(data.fact))
    
  }

  return (
    <main>
      <h1> {fact}</h1>
      <button onClick={handleClick}>Again?</button>
    </main>
  )
}
