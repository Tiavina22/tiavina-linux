import React, { useState, useEffect, useRef } from 'react';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';
import { terminalPages } from '../data/terminalData';
import { Terminal as TerminalIcon } from 'lucide-react';
import Cursor from './Cursor';

const Terminal: React.FC = () => {
  const [outputs, setOutputs] = useState<React.ReactNode[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isInitialAnimation, setIsInitialAnimation] = useState<boolean>(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto display first page after welcome message
    const timer = setTimeout(() => {
      setIsInitialAnimation(false);
      displayPage(0);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const displayPage = (pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= terminalPages.length) return;
    
    const page = terminalPages[pageIndex];
    
    // Add page content
    const pageOutput = (
      <div className="mt-4 animate-slideUp" key={`page-${pageIndex}`}>
        {page.sections.map((section, sectionIndex) => (
          <div key={`section-${pageIndex}-${sectionIndex}`}>
            {section.content}
          </div>
        ))}
      </div>
    );
    
    setOutputs(prevOutputs => [...prevOutputs, pageOutput]);
    setCurrentPage(pageIndex);
  };

  const handleCommand = (command: string) => {
    // Add the command to the terminal
    const commandOutput = (
      <div className="flex mt-2" key={`command-${Date.now()}`}>
        <div className="flex items-center">
          <span className="text-terminal-green mr-2">visitor@tiavina:~$</span>
          <Cursor />
        </div>
        <span className="text-terminal-text ml-2">{command}</span>
      </div>
    );
    
    setOutputs(prevOutputs => [...prevOutputs, commandOutput]);
    
    // Process command
    switch (command) {
      case 'next':
        if (currentPage < terminalPages.length - 1) {
          displayPage(currentPage + 1);
        } else {
          addSystemMessage("You've reached the end of the portfolio. Type 'previous' to go back.");
        }
        break;
      
      case 'previous':
        if (currentPage > 0) {
          displayPage(currentPage - 1);
        } else {
          addSystemMessage("You're already at the beginning. Type 'next' to continue.");
        }
        break;
      
      case 'clear':
        setOutputs([]);
        break;
        
      case 'help':
        addSystemMessage(
          <div>
            <div className="mb-2 font-bold text-terminal-cyan">Available commands:</div>
            <ul className="space-y-1">
              <li><span className="text-terminal-yellow">next</span> - Go to the next page</li>
              <li><span className="text-terminal-yellow">previous</span> - Go to the previous page</li>
              <li><span className="text-terminal-yellow">clear</span> - Clear the terminal</li>
              <li><span className="text-terminal-yellow">help</span> - Show this help message</li>
            </ul>
          </div>
        );
        break;
      
      default:
        addSystemMessage(`Command not found: ${command}. Type 'help' for available commands.`);
    }
    
    // Scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const addSystemMessage = (message: React.ReactNode) => {
    const systemOutput = (
      <div className="mt-2 text-terminal-yellow" key={`system-${Date.now()}`}>
        {message}
      </div>
    );
    
    setOutputs(prevOutputs => [...prevOutputs, systemOutput]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-terminal-background flex items-center justify-center p-0 sm:p-4">
      <div className="terminal-window w-full h-full sm:h-[95vh] rounded-none sm:rounded-md overflow-hidden flex flex-col shadow-2xl">
        {/* Terminal header */}
        <div className="bg-terminal-background border-b border-terminal-comment px-2 sm:px-3 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="flex items-center space-x-2 truncate">
            <TerminalIcon size={14} className="text-terminal-text shrink-0" />
            <span className="text-terminal-text text-xs sm:text-sm font-medium truncate">tiavina@portfolio:~</span>
          </div>
          
          <div className="w-16 sm:w-24"></div>
        </div>
        
        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className="terminal-content flex-1 p-2 sm:p-4 overflow-y-auto overflow-x-hidden font-mono text-xs sm:text-sm md:text-base"
        >
          {/* Welcome message */}
          <div className={`${isInitialAnimation ? "animate-typing" : ""} break-words`}>
            <span className="text-terminal-green">Welcome to Tiavina Ramilison's portfolio terminal.</span>
            <span className="text-terminal-text"> Type '<span className="text-terminal-yellow">help</span>' for available commands.</span>
          </div>
          
          {/* Terminal outputs with word wrap */}
          <div className="break-words">
            {outputs.map((output, index) => (
              <React.Fragment key={index}>{output}</React.Fragment>
            ))}
          </div>
          
          {/* Command prompt */}
          <div className="break-words">
            <TerminalPrompt onCommand={handleCommand} showPrompt={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
