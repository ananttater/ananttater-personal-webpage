import './App.css'
import { HomePage } from './Pages/HomePage'
import { AboutMePage } from './Pages/AboutMePage'
import { ContactPage } from './Pages/ContactPage'
import { LinksPage } from './Pages/Linkspage'
import { Resume } from './Pages/Resume'
import NotFoundPage from './Pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AudioPlayer from './components/Audio'

function App() {
   const [isMuted, setIsMuted] = useState(true)

   const toggleMute = () => {
      setIsMuted(!isMuted)
   }

   useEffect(() => {
      function disableRightClick(e) {
         e.preventDefault()
      }
      document.addEventListener('contextmenu', disableRightClick)
      return () => {
         document.removeEventListener('contextmenu', disableRightClick)
      }
   }, [])

   return (
      
      <div className="App">
         <AudioPlayer isMuted={isMuted} toggleMute={toggleMute} />
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/about" element={<AboutMePage />} />
               <Route exact path="/contact" element={<ContactPage />} />
               <Route exact path="/links" element={<LinksPage />} />
               <Route exact path="/resume" element={<Resume />} />
               <Route exact path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
