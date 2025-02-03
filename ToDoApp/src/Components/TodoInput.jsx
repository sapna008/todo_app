import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0.375rem',
            color: '#fff',
            outline: 'none',
            transition: 'border-color 0.2s',
            '::placeholder': {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            background: 'linear-gradient(135deg, #e83e8c 0%, #6f42c1 100%)',
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
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;