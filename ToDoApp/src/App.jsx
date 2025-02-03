import { useState } from 'react';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '2rem 0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <TodoApp />
    </div>
  );
}

export default App;