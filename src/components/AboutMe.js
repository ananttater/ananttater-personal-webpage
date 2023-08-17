import './AboutMe.css'
import { Tech } from './Technologies'
import { useState, useEffect } from 'react'

export const AboutMe = () => {
   const BIRTHDATE = new Date('2001-05-18')
   const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365
   const [ageInPoints, setAgeInPoints] = useState(
      (new Date() - BIRTHDATE) / MS_PER_YEAR
   )

   useEffect(() => {
      const intervalId = setInterval(() => {
         setAgeInPoints((new Date() - BIRTHDATE) / MS_PER_YEAR)
      }, 10)
      return () => clearInterval(intervalId)
   })
   const ageInYearsFormatted = ageInPoints.toFixed(9)

   return (
      <div className="about-me" id="about-me">
         <h2> Hi! I'm Anant ✌️</h2>
         
         <p>
            I'm a {ageInYearsFormatted} y/o final year student studying in <a href="https://chennai.vit.ac.in/">Vellore Institute of Technology, Chennai</a>.
            <br></br>A self-taught developer. I started coding when I was in first semester of college.
         </p>
         <br />
         <h2>What Do I Do 💭</h2>
         <p>
            I am passionate about everything related to technology, including
            designing and developing software, understanding the various
            components of the internet and how they work together,
            cybersecurity, systems, programming, and more. I am constantly
            striving to expand my knowledge in these areas and apply it to gain
            a deeper understanding of the technology that surrounds us.
         </p>
         <br />
         
         <h2>What I'm Currently Learning 📚</h2>
         <br />
         <ul>
            <li>Generative AI</li>
            <li>Large Language Model (LLM)</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Reinforcement Learning</li>
         </ul>
         <br />

         <br />
         <Tech />
         <br />
      </div>
   )
}
