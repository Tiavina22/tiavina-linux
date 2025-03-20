
import React, { useState, useEffect, useRef } from 'react';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';
import { terminalPages } from '../data/terminalData';
import { Terminal as TerminalIcon, X, Minus, Maximize } from 'lucide-react';

const Terminal: React.FC = () => {
  const [outputs, setOutputs] = useState<React.ReactNode[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Terminal window state
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Auto display first page after welcome message
    const timer = setTimeout(() => {
      setShowWelcome(false);
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
        <span className="text-terminal-green mr-2">visitor@tiavina:~$</span>
        <span className="text-terminal-text">{command}</span>
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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen w-full'} bg-terminal-background flex items-center justify-center p-4`}>
      <div className={`terminal-window w-full ${isFullscreen ? 'h-full' : 'max-w-4xl h-[85vh]'} rounded-md overflow-hidden flex flex-col shadow-2xl`}>
        {/* Terminal header */}
        <div className="bg-terminal-background border-b border-terminal-comment p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="flex items-center space-x-2">
            <TerminalIcon size={16} className="text-terminal-text" />
            <span className="text-terminal-text text-sm font-medium">tiavina@portfolio:~</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="text-terminal-text hover:text-terminal-yellow transition-colors">
              <Minus size={16} />
            </button>
            <button 
              className="text-terminal-text hover:text-terminal-yellow transition-colors"
              onClick={toggleFullscreen}
            >
              <Maximize size={16} />
            </button>
            <button className="text-terminal-text hover:text-terminal-red transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>
        
        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className="terminal-content flex-1 p-4 overflow-y-auto font-mono text-sm md:text-base"
        >
          {/* Welcome message */}
          {showWelcome && (
            <div className="animate-typing overflow-hidden whitespace-nowrap">
              <span className="text-terminal-green">Welcome to Tiavina Ramilison's portfolio terminal.</span>
              <span className="text-terminal-text"> Type '<span className="text-terminal-yellow">help</span>' for available commands.</span>
            </div>
          )}
          
          {/* Terminal outputs */}
          {outputs.map((output, index) => (
            <React.Fragment key={index}>{output}</React.Fragment>
          ))}
          
          {/* Command prompt */}
          <TerminalPrompt onCommand={handleCommand} showPrompt={true} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
