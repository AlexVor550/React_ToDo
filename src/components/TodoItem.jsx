import React from 'react';
import { BsTrash3Fill } from 'react-icons/bs';
import cn from 'classnames';
import Check from './Check';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'>
            
            <div className='flex items-center'>
                <label>
                    <input
                        type='checkbox'
                        style={{ display: 'none' }} // Скрытый чекбокс
                        checked={todo.isCompleted}
                        onChange={(ev) => { ev.preventDefault(); changeTodo(todo.id)}}
                    />
                    <Check isCompleted={todo.isCompleted} />
                </label>

                <Link to={`/task/${todo.id}`}>
                    <span
                        className={cn({
                            'line-through': todo.isCompleted,
                        })}
                    >
                        {todo.title}
                    </span>
                </Link>

            </div>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash3Fill size={22} className='text-pink-900' />
            </button>
        </div>
    );
};

export default TodoItem;
