import React from 'react'
import styles from './MyName.module.css';
// import './index.css'


const MyName = (props) => {
  return (
    <>
      <h1 className={`${styles.heading} bg-danger p-5`}>User name is {props.name}</h1>
      <h1>User age is {props.age}</h1>
    </>
  )
}

export default MyName