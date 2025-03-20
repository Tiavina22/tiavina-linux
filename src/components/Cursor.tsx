
import React, { useEffect, useState } from 'react';

interface CursorProps {
  blinking?: boolean;
}

const Cursor: React.FC<CursorProps> = ({ blinking = true }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!blinking) return;
    
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 600);
    
    return () => clearInterval(interval);
  }, [blinking]);

  return (
    <span 
      className={`inline-block w-[10px] h-5 bg-terminal-green ${blinking ? 'animate-blink' : ''}`}
      style={{ opacity: visible || !blinking ? 1 : 0 }}
    />
  );
};

export default Cursor;
