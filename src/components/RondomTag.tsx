import React, { useContext } from 'react'
import Button from './Button'
import { MyContext } from '../pages/MainPage/MainPage'

function RondomTag() {
  const context = useContext(MyContext)
  return (
    <div>
        <Button title={context}></Button>
    </div>
  )
}

export default RondomTag