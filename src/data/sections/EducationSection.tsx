
import React from 'react';
import { TerminalSection } from '../types';

export const EducationSection: TerminalSection = {
  title: "Education",
  content: (
    <div className="mb-6">
      <div className="section-divider my-4"></div>
      <div className="text-terminal-pink font-bold mb-3 text-xl">Education:</div>
      <div className="section-divider mb-4"></div>
      
      <div className="mb-6">
        <div className="text-terminal-green font-bold">Third Year in Computer Science</div>
        <div className="text-terminal-yellow italic">University of Antananarivo CNTEMAD | 2024 - Present</div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Specializing in Software Engineering and Database Management.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <div className="text-terminal-green font-bold">Computer Science & Telecommunication</div>
        <div className="text-terminal-yellow italic">ISPM | 2022 - 2023</div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Focused on Computer Management, Software Engineering, and Artificial Intelligence.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <div className="text-terminal-green font-bold">Scientific Baccalaureate, Series C</div>
        <div className="text-terminal-yellow italic">Lycée Thomas Bevan Toamasina | 2021</div>
        <ul className="mt-2 pl-5 list-disc text-terminal-text">
          <li>Scientific Baccalaureate, Series C.</li>
        </ul>
      </div>
    </div>
  )
};
