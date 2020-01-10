import React, { useState } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Letter from './Letter';

const App: React.FC = () => {
  const [items] = useState(['A', 'B']);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{
        display: 'flex',
      }}>
        {items.map(letter => {
          return <Letter letter={letter} key={letter} />
        })}
      </div >
    </DndProvider >
  );
}

export default App;
