
import React from 'react';
import { TerminalPage } from './types';
import { ProfileSection } from './sections/ProfileSection';
import { TechStackSection } from './sections/TechStackSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';

export const terminalPages: TerminalPage[] = [
  {
    sections: [
      ProfileSection
    ]
  },
  {
    sections: [
      TechStackSection
    ]
  },
  {
    sections: [
      ExperienceSection
    ]
  },
  {
    sections: [
      EducationSection
    ]
  },
  {
    sections: [
      ProjectsSection
    ]
  }
];
