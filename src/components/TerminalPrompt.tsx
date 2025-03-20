import React, { useState, useRef, useEffect } from 'react';
import Cursor from './Cursor';

interface TerminalPromptProps {
  onCommand: (command: string) => void;
  showPrompt: boolean;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({ onCommand, showPrompt }) => {
  const [command, setCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    // Focus input when component mounts
    focusInput();

    // Focus input when window is clicked
    window.addEventListener('click', focusInput);

    return () => window.removeEventListener('click', focusInput);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      onCommand(command.trim().toLowerCase());
      setCommand('');
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="flex items-center mt-2 animate-fadeIn">
      <div className="flex items-center">
        <span className="text-terminal-green">visitor@tiavina:~$</span>
        <Cursor />
      </div>
      <form onSubmit={handleSubmit} className="flex-1 flex items-center ml-2">
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="command-input flex-1 bg-transparent text-terminal-text border-none focus:outline-none"
          autoFocus
          aria-label="Terminal command input"
        />
      </form>
    </div>
  );
};

export default TerminalPrompt;
