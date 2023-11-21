import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TaskPage = ({ todos }) => {
  const { id } = useParams();
  const task = todos.find(todo => todo.id === id);

  if (!task) {
    return <div>Задача не найдена</div>;
  }

  return (
    <div className="text-white w-4/5 mx-auto text-2xl font-bold text-center mb-4  rounded-2xl bg-gray-800 p-5 w-full ">
      <h2 className='text-black'>ID: </h2>{id}
      <p className='text-black'>Заголовок:</p>{task.title}
      <p><Link to={`/task`} className='text-red-800 '>Перейти к ToDo</Link></p>
    </div>
  );
};

export default TaskPage;
