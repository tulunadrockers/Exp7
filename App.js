import React from "react"; 
import ProfileCard from "./ProfileCard"; 
import "./App.css"; 
 
function App() { 
    return ( 
        <div className="app"> 
            <ProfileCard 
                name="Joy" 
                bio="A passionate software developer with a love for creating impactful solutions." 
                profilePicture="https://randomuser.me/api/portraits/women/80.jpg" 
                color="Light Yellow" 
            /> 
        </div> 
    ); 
} 
export default App;
