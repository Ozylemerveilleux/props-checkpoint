import React from 'react';
import Profil from './Profil/Profil';
import HandleName from './Profil/HandleName';
import './App.css';
import image from './Pp.jpg'


function App() {
  return (
    <div className="App">
      <div>
        <Profil fullName = "Name:I am mister Ismaila Holdi COLY" />
      </div>
      <div> <Profil profession = "Profession: I am master financial ingineering"/> </div>
      <div> <Profil bio = " Bio: After my Licence I got my master's degree in audit and management control"/> </div>
      <div> <Profil> <img src= {image} alt='Pp'/> </Profil> </div>
    </div>
  );
}

export default App;
