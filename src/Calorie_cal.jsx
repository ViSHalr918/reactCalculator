import React from 'react'

function Calorie_cal() {
    var activityLevelOptions=[
        {"name":"Sedentary","value":1.2},
        {"name":"LihtlyActive","value":1.375},
        {"name":"Moderately","value":1.55},
        {"name":"veryActive","value":1.725},
        {"name":"ExtraActive","value":1.9},

    ]
 
    return (
    <div>

        <div className="container">

            <form action="" className='w-50 mx-auto border rounded shadow p-5 mt-5'>
                <div className="mb-3">
                    <label htmlFor="">Weight</label>
                    <input type="text" className='form-control' />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Height</label>
                    <input type="text"  className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Age</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Gender</label>
                   <select name="" id="" className='form-control form-select'>
                        <option value="male">male</option>
                        <option value="female">female</option>
                   </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="">ActivityLevel</label>
                    <select name="" id="" className='form-control form-select'>
                            {activityLevelOptions.map((a,i)=>(
                                <option value={a.value}>{a.name}</option>
                            ))}
                    </select>
                </div>

                <div>
                    <button type='submit'>Find</button>
                </div>

            </form>
        </div>

      
    </div>
  )
}

export default Calorie_cal