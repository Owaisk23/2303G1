import React from 'react'

const MyName = (props) => {
  return (
    <>
      <h1>User name is {props.name}</h1>
      <h1>User age is {props.age}</h1>
    </>
  )
}

export default MyName
