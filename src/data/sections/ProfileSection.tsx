import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { TerminalSection } from '../types';

const AsciiLogo = () => (
  <pre className="ascii-animation text-sm font-mono leading-none mr-8">
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
    <div className="flex items-start mt-4">
      <AsciiLogo />
      
      <div className="flex-1">
        <div className="mb-2 flex">
          <span className="text-terminal-green font-bold">tiavina</span>
          <span className="text-terminal-text">@</span>
          <span className="text-terminal-purple">portfolio</span>
        </div>
        <div className="border-b border-terminal-text mb-4"></div>
        
        <div className="grid grid-cols-2 gap-y-1">
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Name: </span>
            <span className="text-terminal-text ml-2">Tiavina Ramilison</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">XP: </span>
            <span className="text-terminal-text ml-2">1 year</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Status: </span>
            <span className="text-terminal-text ml-2">Software Engineer Student</span>
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
            <span className="text-terminal-yellow font-bold">To be: </span>
            <span className="text-terminal-text ml-2">An Software Engineer and Aeronautics Engineer</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow font-bold">Age: </span>
            <span className="text-terminal-text ml-2">21</span>
          </div>
        </div>

        <div className="border-b border-terminal-text my-4"></div>

        <div className="grid grid-cols-2 gap-2">
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
        
        <div className="flex">
          <div className="flex gap-2">
            <span className="w-4 h-4 bg-terminal-red"></span>
            <span className="w-4 h-4 bg-terminal-green"></span>
            <span className="w-4 h-4 bg-terminal-yellow"></span>
            <span className="w-4 h-4 bg-terminal-blue"></span>
            <span className="w-4 h-4 bg-terminal-purple"></span>
            <span className="w-4 h-4 bg-terminal-cyan"></span>
          </div>
        </div>
      </div>
    </div>
  )
};
