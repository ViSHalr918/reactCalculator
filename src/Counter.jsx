import React, { useState } from 'react'

function Counter() {
    var [count,setCount] = useState(0)

    function handleincrement(){
        setCount(count+1)
    }
    function handledecrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(count=0)
    }


  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleincrement}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={handledecrement}>-</button>

    </div>
  )
}

export default Counter
