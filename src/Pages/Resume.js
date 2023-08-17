import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

import { Link } from 'react-router-dom'

export const Resume = () => {
   return (
      <div>
         <NavBar />
         <div className="resume-page-cont">
            <p className="go-back-home">
               &larr; <Link to="/">home.</Link>
            </p>
            <h1>Resume</h1>
            
            <iframe title="resume" src="https://drive.google.com/file/d/1cNmrIAAXISGvaWJOu6fMK-ZjMSq0P5_K/preview" width="1000" height="1100" allow="autoplay"></iframe>
            <Footer />
         </div>
      </div>
   )
}
