import React from 'react'

function Events() {
    var clicked = ()=>(
        console.log("clicked")
        
    )
    function displayname(name){
        console.log(name);       

    }
    function handleInputType(event){
        console.log(event.target.value);
        
    }

  return (
    <div>
      <button onClick={clicked}>Click</button>
      <button onClick={()=>displayname("dgfvjdf")}>name</button>  
      <input type="text" value="" onChange={handleInputType} />
      
    </div>
  )
}

export default Events
