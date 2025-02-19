import React, { useState } from 'react'

export const TodoForm = () => {
   const [value, setValue] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      console.log(value);
      
   }

   return (
      <form className="TodoForm" onSubmit={handleSubmit}>
         <input type="text" className='todo-input' onChange={(e) => setValue(e.target.value)} placeholder='what is the task today?' />
         <button type="submit" className='todo-btn'>
            Add task
         </button>
      </form>
   );
}
