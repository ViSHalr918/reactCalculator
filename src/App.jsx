import React from 'react'
import Events from './Events'
import Counter from './Counter'
import Add from './Add'
import Headers from './Headers'
import Calorie_cal from './Calorie_cal'


import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
     <BrowserRouter>

      <Headers></Headers>   
      <Routes>

        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/calorie' element={<Calorie_cal></Calorie_cal>}></Route>


      </Routes>

     </BrowserRouter>

    </div>
  )
}

export default App
