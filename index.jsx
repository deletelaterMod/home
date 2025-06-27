import React from 'react';

function App() {
  const username = "World";

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Hello, {username}!</h1>
      <p>Welcome to your first JSX component.</p>
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}

export default App;
