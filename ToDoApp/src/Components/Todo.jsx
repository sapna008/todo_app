import React, { memo } from 'react';

const Todo = memo(({ todo, onToggle, onDelete }) => {
  const heavyTask = () => {
    let start = Date.now();
    while (Date.now() - start < 400) {
      continue;
    }
    return true;
  };

  heavyTask();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '0.75rem',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}>
      <span 
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'rgba(255, 255, 255, 0.5)' : '#fff',
          flex: 1,
          padding: '0.5rem'
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            background: 'linear-gradient(135deg,rgb(246, 8, 8) 0%,rgb(230, 82, 82) 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
      >
        Delete
      </button>
    </div>
  );
});

Todo.displayName = 'Todo';

export default Todo;