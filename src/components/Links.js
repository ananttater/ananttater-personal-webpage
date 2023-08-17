import {
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaTwitter,
} from 'react-icons/fa'

export const Links = () => {
   const links = [
      
      {
         text: 'GitHub',
         username: ' // @ananttater',
         icon: <FaGithub />,
         href: 'https://github.com/ananttater',
      },
      {
         text: 'Instagram',
         username: ' // @ananttater',
         icon: <FaInstagram />,
         href: 'https://instagram.com/ananttater',
      },
      {
         text: 'LinkedIn',
         username: ' // @ananttater',
         icon: <FaLinkedin />,
         href: 'https://linkedin.com/in/ananttater',
      },
      {
         text: 'Twitter',
         username: ' // @ananttater',
         icon: <FaTwitter />,
         href: 'https://twitter.com/ananttater',
      }
   ]

   return (
      <div className="Links">
         <h1>My Socials</h1>
         <div className="links-cont">
            {links.map((link) => (
               <a
                  className="links-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.text}
                  aria-label={link.text}
               >
                  <div className="links-link-text">
                     {link.text}
                     <span className="username">{link.username}</span>
                  </div>
                  <div className="links-link-icon">{link.icon}</div>
               </a>
            ))}
         </div>
      </div>
   )
}
