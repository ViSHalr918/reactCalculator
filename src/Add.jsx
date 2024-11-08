import React, { useState } from 'react'

function Add() {

    var [num1,setNum1]=useState(0)
    var [num2,setNum2]=useState(0)
    var [result,setResult]=useState(0)

    function handleSubmit(event){
        event.preventDefault()

        setResult(num1+num2)

    }


  return (
    <div>

        <h1>{result}</h1>
      
            <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">number1</label>
                    <input type="text" 
                    value={num1}
                    onChange={(e)=>setNum1(+e.target.value)}
                    /> <br />

                    <label htmlFor="">
                        number2
                    </label>

                    <input type="text" 
                    value={num2}
                    onChange={(e)=>setNum2(+e.target.value)}
                    /> <br />

                    <button type='submit'>Add</button>

            </form>

    </div>
  )
}

export default Add


// addition,subtraction,division,multiplication