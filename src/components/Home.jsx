import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoItem from './TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';
import TaskPage from './TaskPage';
import { v4 as uuidv4 } from 'uuid';

const Todos = [
  {
    id: uuidv4(),
    title: 'Пойти в универ',
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : Todos;
  });

  const [sortOrder, setSortOrder] = useState('asc'); // Добавлено начальное значение

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    const copy = todos.filter(t => t.id !== id);
    setTodos(copy);
  };

  const createTodo = (title) => {
    const storedTodos = localStorage.getItem('todos');
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };

    if (storedTodos) {
      setTodos([newTodo, ...JSON.parse(storedTodos)]);
    } else {
      setTodos([newTodo, ...todos]);
    }
  };

  const toggleSortOrder = () => {
    // Переключаем порядок сортировки
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedTodos = [...todos].sort((a, b) => {
    // Сортировка по алфавиту
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (titleA > titleB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="text-white w-4/5 mx-auto">
        <h1 className='text-2xl font-bold text-center mb-4'>Todo</h1>
        <div className="mb-4">
          <button onClick={toggleSortOrder}>
            Сортировка: {sortOrder === 'asc' ? 'По возрастанию' : 'По убыванию'}
          </button>
        </div>
        <Routes>
          <Route
            exact path="/task" element={(
              <>
                {sortedTodos.map(todo => (
                  <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
                ))}
                <CreateTodoField createTodo={createTodo} />
              </>
            )}
          />
          <Route path="/task/:id" element={<TaskPage todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
