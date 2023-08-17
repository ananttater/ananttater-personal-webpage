import {
   FaCss3,
   FaGit,
   FaGithub,
   FaHtml5,
   FaJava,
   FaJs,
   FaNode,
   FaPython,
   FaPhp,
   FaReact,
} from 'react-icons/fa'
import{
   TbBrandCpp
} from 'react-icons/tb'

const TechItem = ({ icon, text }) => {
   const Icon = icon
   return (
      <div className="techs-cont">
         <div className="techs-icon">
            <Icon />
         </div>
         <div className="techs-text">{text}</div>
      </div>
   )
}

export const Tech = () => {
   const techs = [
      { icon: TbBrandCpp, text: 'C++' },
      { icon: FaJava, text: 'Java' },
      { icon: FaPython, text: 'Python' },
      { icon: FaJs, text: 'JavaScript' },
      { icon: FaReact, text: 'React' },
      { icon: FaNode, text: 'Node' },
      { icon: FaHtml5, text: 'HTML' },
      { icon: FaCss3, text: 'CSS' },
      { icon: FaGithub, text: 'GitHub' },
      { icon: FaPhp, text: 'PHP' },
      { icon: FaGit, text: 'Git' },
   ]
   return (
      <div className="techs" id="techs">
         <h2>Skills ⚡️</h2>
         <br />
         {techs.map((tech) => (
            <TechItem icon={tech.icon} text={tech.text} key={tech.text} />
         ))}
      </div>
   )
}
