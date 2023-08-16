import React, { useEffect, useState } from 'react'
import './input.css'
const FACT_ENDPOINT = 'https://catfact.ninja/facts?limit=5'

export function App() {
  const [facts, setFacts] = useState([])

  useEffect(() => {
    fetch(FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.data)
        console.log(data)
      })
      .catch((error) => console.error(error))
  }, [])

  function handleClick() {
    fetch(FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.data)
      })
      .catch((error) => console.error(error))
  }

  return (
    <main className="grid grid-rows-4 grid-flow-col gap-4">
      <h1 className="text-8xl font-indieFlower bg-red row-span-3 mt-20 ml-10 place-self-center">
        CATS' <br></br>FACTS
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="56"
        viewBox="0 0 40 56"
        fill="none"
        className="row-span-3 place-self-center"
      >
        <path
          d="M39.7637 28.0861L0.163526 55.2408L0.572733 0.344152L39.7637 28.0861Z"
          fill="#FF9442"
        />
      </svg>
      <ul className="font-indieFlower row-span-3 col-span-2 m-10 list-disc">
        <p className="text-2xl mt-36 pb-10">Do you konw....?</p>
        {facts.map((fact, index) => (
          <li key={index}>
            <p className="pb-4 text-xl">{fact.fact}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleClick} className="col-span-2 place-item-start">
        <i
          className="fa-solid fa-paw text-9xl text-blue hover:text-sky-500 transition-colors duration-300"
          size="2xl"
        ></i>
      </button>
    </main>
  )
}
