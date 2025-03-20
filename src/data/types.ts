
import React from 'react';

export interface TerminalSection {
  title?: string;
  content: React.ReactNode;
}

export interface TerminalPage {
  sections: TerminalSection[];
}
