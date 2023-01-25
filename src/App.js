import './App.css';
import NavigasiBar from './Components/NavigasiBar';
import Intro from './Components/Intro';
import Trending from "./Components/Trending"


import "./Style/landingpage.css"
function App() {
  return (
    <div>
      
      <div className="myBG">
        <NavigasiBar />
        <Intro />
        </div>
        
      <div className="trending"> 
        <Trending />
      </div>

    
      
    </div>
  )
}

export default App;
