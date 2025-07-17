import React, { createContext } from 'react'
import Button from '../../components/Button'
import RondomTag from  '../../components/RondomTag'

export const MyContext = createContext('Error');
export const MyLet = 'dfdfdfkdfjdkj'
export default function MainPage() {
  
  return (
    <div>
      <h1>MainPage</h1>
      <Button title={'dfdjfdf'} />
      <MyContext.Provider value="Всё сработало, класс!">
        <RondomTag />
      </MyContext.Provider>
      
    </div>
  )
}

