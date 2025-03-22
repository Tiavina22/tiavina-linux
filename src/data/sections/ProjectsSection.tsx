
import React from 'react';
import { TerminalSection } from '../types';

export const ProjectsSection: TerminalSection = {
  title: "Projects",
  content: (
    <div className="mb-6">
      <div className="section-divider my-4"></div>
      <div className="text-terminal-pink font-bold mb-3 text-xl">Projects:</div>
      <div className="section-divider mb-4"></div>
      
      <div className="mb-6">
        <div className="text-terminal-green font-bold">Lyrify</div>
        <p className="mt-2 text-terminal-text">
          Lyrify is an app that brings your music to life with perfectly synced lyrics. Dive into a unique musical journey where every song reveals its story, one lyric at a time. In addition to featuring lyrics powered by the lrclib library, Lyrify also includes Malagasy songs from the renowned Tononkira collection. Enjoy a rich and authentic experience that combines precise lyric synchronization with the cultural diversity of Malagasy music and currently features 500 lyrics.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Dart, Flutter, JavaScript, Node.js, MySQL</span>
        </div>
      </div>

       <div className="mb-6">
        <div className="text-terminal-green font-bold">Appistery</div>
        <p className="mt-2 text-terminal-text">
         A streaming app that immerses you in the world of Malagasy literature. Discover captivating stories and unique experiences that transport and inspire with every page. Perfect for lovers of traditional and modern Malagasy tales.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Dart, Flutter, Php, MySQL</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">TinyDesk</div>
        <p className="mt-2 text-terminal-text">
          A Flutter desktop application for managing terminal commands, code snippets, and personal notes. 
          Designed to keep your workspace organized and accessible.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Dart, Flutter, JavaScript, Node.js, PostgreSQL</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">SvgHub</div>
        <p className="mt-2 text-terminal-text">
          Access a comprehensive collection of SVG logos for your development projects through this web app. Download high-quality logos for free.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Typescript, React, Vite, Tailwind</span>
        </div>
      </div>
      
      <div className="mt-8 text-terminal-red italic">
        [Command not found. Use 'next' to continue or 'previous' to go back.]
      </div>
    </div>
  )
};
