
import React, { useEffect, useRef } from 'react';

interface TerminalOutputProps {
  content: React.ReactNode;
  className?: string;
  animated?: boolean;
  delay?: number;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ 
  content, 
  className = "", 
  animated = false,
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [content]);

  return (
    <div 
      ref={elementRef}
      className={`terminal-line ${animated ? 'animate-fadeIn' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {content}
    </div>
  );
};

export default TerminalOutput;
