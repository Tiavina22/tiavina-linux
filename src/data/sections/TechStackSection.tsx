
import React from 'react';
import { TerminalSection } from '../types';

export const TechStackSection: TerminalSection = {
  title: "Tech Stack",
  content: (
    <div className="mb-6">
      <div className="section-divider my-4"></div>
      <div className="text-terminal-pink font-bold mb-3 text-xl">Tech Stack:</div>
      <div className="section-divider mb-4"></div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        <li>
          <span className="text-terminal-cyan">Backend: </span>
          <span className="text-terminal-text">Node.js</span>
        </li>
        <li>
          <span className="text-terminal-cyan">Mobile Development: </span>
          <span className="text-terminal-text">Flutter, React Native</span>
        </li>
        <li>
          <span className="text-terminal-cyan">Programming Languages: </span>
          <span className="text-terminal-text">Dart, JavaScript, TypeScript</span>
        </li>
        <li>
          <span className="text-terminal-cyan">Database: </span>
          <span className="text-terminal-text">MySQL, PostgreSQL, SQFlite</span>
        </li>
        <li>
          <span className="text-terminal-cyan">ORM: </span>
          <span className="text-terminal-text">Sequelize</span>
        </li>
        <li>
          <span className="text-terminal-cyan">CSS Framework: </span>
          <span className="text-terminal-text">Tailwind CSS</span>
        </li>
        <li>
          <span className="text-terminal-cyan">OS: </span>
          <span className="text-terminal-text">Linux Mint, Ubuntu, Windows</span>
        </li>
        <li>
          <span className="text-terminal-cyan">Tools: </span>
          <span className="text-terminal-text">Git, Postman, VS Code, WebStorm</span>
        </li>
      </ul>
    </div>
  )
};
