import { Weather } from '../APIs/WeatherAPI'
import { TimeStatus } from '../APIs/TimeStatusAPI'

export const Home = () => {
   return (
      <div className="home">
         <h1>Hey 👋🏻, I'm Anant!</h1>
         <p>
            FullStack Developer & AI/ML Learner
         </p>
         <br />
         <div>
            <TimeStatus /> | <Weather /> 
         </div>
      </div>
   )
}
