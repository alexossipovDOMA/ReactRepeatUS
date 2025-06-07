import React, { useState } from 'react'
import * as classes from './Counter.module.scss'

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className={classes.but} onClick={increment}>{count}</button>
        </div>
    )
}
