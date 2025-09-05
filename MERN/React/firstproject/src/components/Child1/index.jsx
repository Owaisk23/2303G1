import React from 'react'

const Child1 = ({games, setgames}) => {
  
  let addGame = () => {
    let newgame = document.getElementById("newgame").value;
    setgames([...games, newgame])

  }
  return (
    <>
     <input type="text" placeholder="Enter game" id="newgame" /> 
     <button className='btn btn-primary' onClick={addGame}>Add Gmae</button>
    </>
  )
}

export default Child1
      