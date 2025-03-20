
import React from 'react';
import { TerminalSection } from '../types';

export const ExperienceSection: TerminalSection = {
  title: "Professional Experience",
  content: (
    <div className="mb-6">
      <div className="section-divider my-4"></div>
      <div className="text-terminal-pink font-bold mb-3 text-xl">Professional Experience:</div>
      <div className="section-divider mb-4"></div>
      
      <div className="mb-6">
        <div className="text-terminal-green font-bold">Software Engineer</div>
        <div className="text-terminal-yellow italic">Vanilla Pay International | October 2024 - Present</div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Developing new features for the company's mobile platform.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <div className="text-terminal-green font-bold">DevOps & Mobile Developer</div>
        <div className="text-terminal-yellow italic">Mistery | June 2023 - March 2025</div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Backend, database management, DevOps, and mobile developer for a book streaming and booking application.</li>
          <li>Contributed to the development of a mobile platform using Flutter.</li>
        </ul>
      </div>
    </div>
  )
};
