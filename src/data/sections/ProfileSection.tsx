import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { TerminalSection } from '../types';

export const ProfileSection: TerminalSection = {
  content: (
    <>
      <div className="mb-4">
        <span className="text-terminal-purple text-2xl font-bold">Name: </span>
        <span className="text-terminal-text text-2xl">Tiavina Ramilison</span>
      </div>
      <div className="mb-4">
        <span className="text-terminal-purple font-bold">Role: </span>
        <span className="text-terminal-text">Software Engineer Student | Mobile Developer</span>
      </div>
      <div className="mb-4">
        <span className="text-terminal-purple font-bold">Age: </span>
        <span className="text-terminal-text">21 years old</span>
      </div>
      <div className="mb-6">
        <span className="text-terminal-purple font-bold">Location: </span>
        <span className="text-terminal-text">Antananarivo, Madagascar</span>
      </div>

      <div className="mb-6">
        <p className="text-terminal-text">
          I'm passionate about technology and dedicated to creating innovative digital experiences. 
          With a drive for continuous learning, I embrace new challenges and always strive to push 
          the boundaries of what's possible in tech.
        </p>
      </div>

      <div className="mb-4">
        <div className="text-terminal-green font-bold mb-2">Contact:</div>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <FaGithub size={20} className="text-terminal-yellow" />
            <span className="text-terminal-yellow">GitHub: </span>
            <a href="https://github.com/Tiavina22" target="_blank" rel="noopener noreferrer" className="terminal-link">
              https://github.com/Tiavina22
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin size={20} className="text-terminal-yellow" />
            <span className="text-terminal-yellow">LinkedIn: </span>
            <a href="https://www.linkedin.com/in/tiavina-ramilison" target="_blank" rel="noopener noreferrer" className="terminal-link">
              https://www.linkedin.com/in/tiavina-ramilison
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope size={20} className="text-terminal-yellow" />
            <span className="text-terminal-yellow">Email: </span>
            <a href="mailto:tiavinaramilison22@gmail.com" className="terminal-link">
              tiavinaramilison22@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaWhatsapp size={20} className="text-terminal-yellow" />
            <span className="text-terminal-yellow">WhatsApp: </span>
            <a href="https://wa.me/+261345939753" target="_blank" rel="noopener noreferrer" className="terminal-link">
              https://wa.me/+261345939753
            </a>
          </li>
        </ul>
      </div>
    </>
  )
};
