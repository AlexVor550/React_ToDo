import React, { useState } from 'react';

const CreateTodoField = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (title.trim() !== '') {
        createTodo(title);
        setTitle('');
      }
    }
  };

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={handleKeyDown}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Enter Todo'
      />
    </div>
  );
}

export default CreateTodoField;
////////////////////////////////////////////////////////////////////////////////////////////////////