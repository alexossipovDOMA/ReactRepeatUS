import React from 'react'
import { JSX } from 'react/jsx-runtime'
import './Button.scss'


export default function Button(props: Props): JSX.Element {
  return (
    <button className='button'>
        <span className='title'>
            {props.title}
        </span>
    </button>
  )
}

interface Props{
  title: string
}

