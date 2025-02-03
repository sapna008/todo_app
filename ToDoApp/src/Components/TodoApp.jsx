import React, { useState, useCallback, useMemo } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = useCallback((text) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: 'rgba(26, 26, 46, 0.7)',
      borderRadius: '1rem',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.18)'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'rgb(253, 151, 199)',
        marginBottom: '2rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
      }}>Todo App</h1>
      <div style={{ marginTop: '1.5rem' }}>
        <TodoInput onAdd={handleAdd} />
        <div style={{ marginTop: '1.5rem' }}>
          {memoizedTodos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;