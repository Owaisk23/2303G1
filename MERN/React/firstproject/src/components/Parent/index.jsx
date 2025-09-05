import React from 'react'
import { useState } from 'react'
import { use } from 'react'
import Child1 from '../Child1'
import Child2 from '../Child2'

const Parent = () => {
  let [games, setGames] = useState(["Dota 5", "CSGO", "Valorant"])
  return (
    <div>
      <Child1 games={games} setgames={setGames}/>
      <Child2 games={games}/>
    </div>
  )
}

export default Parent
