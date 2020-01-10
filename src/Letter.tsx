import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const MOVE = 'MOVE';

interface LetterProps {
  letter: string
}
const Letter = ({
  letter,
}: LetterProps) => {
  const [{ isOver } , drop] = useDrop({
    accept: MOVE,
    collect: monitor => ({ isOver: monitor.isOver() }),
  });

  const [, drag] = useDrag({
    item: {
      type: MOVE,
      letter: letter,
    }
  })

  return <div ref={drop} style={{
    width: '200px',
    height: '200px',
    position: 'relative',
  }}>
    {letter}
    {isOver &&
      <React.Fragment>
        <Side side={0} />
        <Side side={1} />
      </React.Fragment >
    }
    <div ref={drag} style={{}}>{'<drag handle>'}</div>
  </div>
}

export default Letter

interface SideProps {
  side: 0 | 1
}
const Side = ({
  side
}: SideProps) => {
  const [, drop] = useDrop({
    accept: MOVE,
    collect: monitor => ({ isOver: monitor.isOver() }),
  })
  return <div ref={drop} style={{
    position: 'absolute',
    left: side ? '0px' : 'calc(100% - 40px)',
    width: '40px',
    backgroundColor: 'red',
    top: '0px',
    bottom: '0px',
  }} />
}
