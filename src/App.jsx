import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './Home/Home'
import Comics from './Comics/Comics'
import CharacterDetails from './CharacterDetails/CharacterDetails'
import Characters from './Characters/Characters'
import NavigationBar from './Navigation/NavigationBar'
import './Styles/Styles.css'


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} replace/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/comics' element={<Comics/>}/>
        <Route path='/characters/:id' element={<CharacterDetails/>}/>
        <Route path='/characters' element={<Characters/>}/>
      </Routes>
    </Router>
  );

}
export default App
