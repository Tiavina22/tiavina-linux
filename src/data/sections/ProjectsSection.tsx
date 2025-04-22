
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
        <div className="text-terminal-green font-bold">GitDash</div>
        <p className="mt-2 text-terminal-text">
          GitDash is an app that lets you view your GitHub statistics in an elegant and modern way. Get insights into your contributions, languages used, and much more.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Typescript, React, Tailwind, GitHub API</span>
        </div>
        <div className="mt-2">
          <span className="text-terminal-green">Prod: </span>
          <a href="https://dash-git-woad.vercel.app/" className="text-terminal-green" target="_blank" rel="noopener noreferrer">goTo</a>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">GitMe</div>
        <p className="mt-2 text-terminal-text">
          GitMe is a minimalist GitHub profile README maker for developers who value clean design. It features automatic stats, AI-powered sections, and instant deployment.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Typescript, React, Gemini, Tailwind, GitHub API</span>
        </div>
        <div className="mt-2">
          <span className="text-terminal-green">Prod: </span>
          <a href="https://git-me-livid.vercel.app/" className="text-terminal-green" target="_blank" rel="noopener noreferrer">goTo</a>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">NbaPredict</div>
        <p className="mt-2 text-terminal-text">
          NbaPredict is an app that compares NBA teams and provides AI-powered predictions on the likely winner, based on the latest performance stats.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Typescript, React, Gemini, Tailwind, balldontlie API</span>
        </div>
        <div className="mt-2">
          <span className="text-terminal-green">Prod: </span>
          <a href="https://nba-predict-nine.vercel.app/" className="text-terminal-green" target="_blank" rel="noopener noreferrer">goTo</a>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Lyrify</div>
        <p className="mt-2 text-terminal-text">
        Lyrify is an app that syncs your music with lyrics, featuring over 500 songs including Malagasy tracks from the Tononkira collection.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Dart, Flutter, JavaScript, Node, MySQL</span>
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

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Gift</div>
        <p className="mt-2 text-terminal-text">
         An application designed to help users discover personalized gift ideas. By considering the recipient's tastes, preferences, and interests, this app simplifies the process of finding the perfect gift for any occasion. 
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Typescript, React, Vite, Tailwind</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Pixel Adventure</div>
        <p className="mt-2 text-terminal-text">
      Pixel Adventure is a dynamic 2D platform game that combines retro pixel art style with modern gaming mechanics. Players control an agile character capable of running, jumping, and attacking through challenging levels.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Javascript</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Gamo</div>
        <p className="mt-2 text-terminal-text">
           Gamo is a web application for basketball scoreboarding.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Javascript</span>
        </div>
      </div>

        <div className="mb-6">
        <div className="text-terminal-green font-bold">Ball</div>
        <p className="mt-2 text-terminal-text">
            A captivating arcade game with a neon aesthetic, developed in JavaScript. Test your reflexes by guiding a luminous ball through obstacles while collecting power-ups.
       </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Javascript</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Truncated</div>
        <p className="mt-2 text-terminal-text">
           Truncated is a simple Flutter widget that truncates long text and appends an ellipsis or any custom suffix. It supports expanding the text with a tap and provides smooth animation for opening and closing the text.
       </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Dart, Flutter</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Tiny</div>
        <p className="mt-2 text-terminal-text"> 
          Tiny is a command-line CLI note manager developed in Dart. It enables users to add, list, delete, update, and search notes stored locally in a JSON file
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Dart, Bash, Json</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-terminal-green font-bold">Matematico</div>
        <p className="mt-2 text-terminal-text"> 
          This is a plugin for matematics, available integration numeric and matrix functionnality, OpenSource. Build with Nodejs.
        </p>
        <div className="mt-2">
          <span className="text-terminal-yellow">Technologies: </span>
          <span className="text-terminal-text">Javascript, Node</span>
        </div>
      </div>
      
      <div className="mt-8 text-terminal-red italic">
        [Command not found. Use 'next' to continue or 'previous' to go back.]
      </div>
    </div>
  )
};
