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
        <div className="text-terminal-green font-bold">Lead Developer</div>
        <div className="text-terminal-yellow italic">
          <a href="https://vanilla-pay.net/" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
            Vanilla Pay International
          </a> | Mai 2025 - Present
        </div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Leading the architecture and development of core software and backend services.</li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Software & Mobile Developer</div>
        <div className="text-terminal-yellow italic">
          <a href="https://vanilla-pay.net/" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
            Vanilla Pay International
          </a> | October 2024 - April 2025 (7 Months)
        </div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Developing new features for the company's mobile platform.</li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Backend Developer</div>
        <div className="text-terminal-yellow italic">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
            FlyIN
          </a> | August 2024 - September 2024 (Remote CDD, 2 Months)
        </div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Developing backend features for the company's aeronautics managment platform airport.</li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">DevOps & Mobile Developer</div>
        <div className="text-terminal-yellow italic">
          <a href="https://www.facebook.com/profile.php?id=100088866013531" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
            Mistery
          </a> | October 2024 - Present
        </div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Backend, database management, DevOps.</li>
          <li>Contributed to the backend development and deploiement of a mobile platform using Node, PostgreSQL and Supabase.</li>
        </ul>
      </div>
      

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Mobile Developer</div>
        <div className="text-terminal-yellow italic">
          <a href="https://www.facebook.com/profile.php?id=100088866013531" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
            Mistery
          </a> | July 2023 - Mai 2024 (11 Months)
        </div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Mobile developer for a book streaming and booking application.</li>
          <li>Contributed to the development of a mobile platform using Flutter.</li>
        </ul>
      </div>
    </div>
  )
};
