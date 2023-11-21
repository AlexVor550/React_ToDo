import React from 'react'
import {BsCheck} from "react-icons/bs"

const Check=({isCompleted}) =>{
  return (
    <div className='border-2 rounded-md border-grey-400 w-7 h-7 mr-4'>
    {isCompleted && <BsCheck size={25}
    className="text-pink-900"/>}
    </div>
  )
}

export default Check
