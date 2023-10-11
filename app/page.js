"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2 className='text-black'>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i) => {
      return(
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-1/3'>
          <h4 className='text-black'>{t.title}</h4>
          <h6 className='text-black'>{t.desc}</h6>
        </div>
        <button
        onClick={() => {
          deleteHandler(i)
        }}
        className='bg-red-400 text-black px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
    <h1 className='p-5 text-5xl font-bold text-center'> Taskivist</h1>
    <h6 className='py-0 px-0 text-center'>from~The Rental Studio</h6>

    <form onSubmit={submitHandler}>
      <input
        type="text"
        className='text-black text-xl border-x-zinc-50 border-4 m-8  px-4 py-2'
        placeholder='Enter your task here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
      
      />

      <input
        type='text'
        className='text-black text-xl border-x-zinc-50 border-4 m-8 px-4 py-2'
        placeholder='Enter your Description here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
      />

      <button className='bg-white text-black px-4 py-2 text-xl font-semibold rounded m-5 '>Add Task</button>

    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page
 