import React, { useState } from 'react';
 function Todo(){
  const [list, setList]=useState([])
  const [newTask, setnewTask]=useState("")
  const newip=(e)=>{
    setnewTask(e.target.value)
  }
  const addTask=()=>{
    setList([...list,newTask])
    setnewTask("");
  }
  const delTask=(i)=>{
    const delList=[...list]
    delList.splice(i,1);
    setList(delList)
  }
  const upTask=(e,i)=>{
    const updateTask=[...list]
    updateTask.splice(i,1,e.target.value)
    setList(updateTask)
  }
  

  return(
    <div>
      <h1 className='heading'>Add your Today Task</h1>
      <input className='input_1' type='text'
      onChange={newip}
      value={newTask}
       />
       
      <button className='btn' onClick={addTask}>Add</button>
      {
        list.map((val,i)=>{
          return(
            <div className='container_2'>
              <input className='input_1' type='text' value={val} onChange={(e)=>{upTask(e,i)}}/>
              <span className='span' onClick={()=>{delTask(i)}}>❌</span>
            </div>
          )
        })
      }
    </div>
  )
 }
 export default Todo