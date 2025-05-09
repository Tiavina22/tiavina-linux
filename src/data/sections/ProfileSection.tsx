import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { TerminalSection } from '../types';

const AsciiLogo = () => (
  <pre className="ascii-animation text-[0.4rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-mono leading-none mr-1 sm:mr-2 md:mr-8 overflow-x-auto whitespace-pre">
    {`
     ████████╗██╗ █████╗ ██╗   ██╗██╗███╗   ██╗ █████╗ 
     ╚══██╔══╝██║██╔══██╗██║   ██║██║████╗  ██║██╔══██╗
        ██║   ██║███████║██║   ██║██║██╔██╗ ██║███████║
        ██║   ██║██╔══██║╚██╗ ██╔╝██║██║╚██╗██║██╔══██║
        ██║   ██║██║  ██║ ╚████╔╝ ██║██║ ╚████║██║  ██║
        ╚═╝   ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
    `}
  </pre>
);

export const ProfileSection: TerminalSection = {
  content: (
    <div className="flex flex-col gap-4 sm:flex-row items-start mt-4">
      <div className="w-full sm:w-auto -mx-2 sm:mx-0">
        <AsciiLogo />
      </div>
      
      <div className="flex-1 w-full">
        <div className="mb-2 flex items-center">
          <span className="text-terminal-green font-bold text-sm md:text-base">tiavina</span>
          <span className="text-terminal-text">@</span>
          <span className="text-terminal-purple text-sm md:text-base">portfolio</span>
        </div>
        <div className="border-b border-terminal-text mb-4"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm md:text-base">
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Name: </span>
            <span className="text-terminal-text ml-2">Tiavina Ramilison</span>
          </div>
         <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">XP:</span>
            <span className="text-terminal-text ml-2">18 months</span>
         </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Status: </span>
            <span className="text-terminal-text ml-2">Software Engineer</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Location: </span>
            <span className="text-terminal-text ml-2">Antananarivo, MG</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">& Role: </span>
            <span className="text-terminal-text ml-2">Mobile Developer</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Age: </span>
            <span className="text-terminal-text ml-2">21</span>
          </div>
        </div>

        <div className="border-b border-terminal-text my-4"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaGithub size={16} className="text-terminal-purple" />
            <a href="https://github.com/Tiavina22" target="_blank" rel="noopener noreferrer" className="terminal-link">
              github.com/Tiavina22
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin size={16} className="text-terminal-purple" />
            <a href="https://www.linkedin.com/in/tiavina-ramilison" target="_blank" rel="noopener noreferrer" className="terminal-link">
              Tiavina Ramilison
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={16} className="text-terminal-purple" />
            <a href="mailto:tiavinaramilison22@gmail.com" className="terminal-link">
              tiavinaramilison22@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={16} className="text-terminal-purple" />
            <a href="https://wa.me/+261345939753" target="_blank" rel="noopener noreferrer" className="terminal-link">
              +261 34 59 397 53
            </a>
          </div>
        </div>

        <div className="border-b border-terminal-text my-4"></div>
        
        <div className="flex justify-center sm:justify-start">
          <div className="flex gap-1 sm:gap-2">
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-terminal-red"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-terminal-green"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-terminal-yellow"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-terminal-blue"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-terminal-purple"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-terminal-cyan"></span>
          </div>
        </div>
      </div>
    </div>
  )
};
