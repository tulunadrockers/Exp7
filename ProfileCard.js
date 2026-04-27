import React from "react"; 
import "./ProfileCard.css"; 
 
function ProfileCard({ name, bio, profilePicture, color }) { 
   return ( 
    // Apply external CSS class and dynamic inline styles 
<div className="profile-card"   
     style={{ backgroundColor: color, textAlign: 'center'   }}> 
<img 
    src={profilePicture} 
    alt= {name + " 's profile "} 
   /> 
<h2 >{name}</h2> 
<p >{bio}</p> 
</div > 
) 
} 
 
export default ProfileCard;
