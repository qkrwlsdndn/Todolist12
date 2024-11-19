import React from 'react';
import './App.css'; // CSS 파일은 import로 가져와야 함 밑에쓰면 안됨
import RandomAuddjs from './Randomauddjs';
import CurrentTime from './CurrentTime';
import TodoApp from './TodoApp';

function App() {
  return (
    <div>
      <RandomAuddjs />
      <CurrentTime />
      <TodoApp />
    </div>
  );
}

export default App;
