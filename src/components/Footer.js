import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa'

export const Footer = () => {
   return (
      <footer>
         <div className="left">
            <p>
               <a
                  href="https://github.com/ananttater"
                  aria-label="github"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Anant Tater
               </a>{' '}
               | &copy; {new Date().getFullYear()}
            </p>
         </div>
         <div className="right">
            <a
               href="https://github.com/ananttater"
               aria-label="github"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaGithub />
            </a>
            <a
               href="https://twitter.com/ananttater"
               aria-label="twitter"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaTwitter />
            </a>
            <a
               href="https://www.linkedin.com/in/ananttater"
               aria-label="linkedin"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaLinkedin />
            </a>
            <a
               href="https://discord.com/users/559430149607522325"
               aria-label="discord"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaDiscord />
            </a>
         </div>
      </footer>
   )
}
