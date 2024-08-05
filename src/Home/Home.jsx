import React from 'react'
import {Link} from 'react-router-dom'
import Characters from '../Characters/Characters'
import CharacterDetails from '../CharacterDetails/CharacterDetails'


const Home = () => {

  return (
    <div>
        <h1 className='home'>Welcome<br/>Fans</h1>
        <p className="welcome">Welcome To My Comic Book Library!</p>
        {/* <Link to='/comics'>Comics</Link> */}
        {/* <Link to='/characters'>Characters</Link> */}
        {/* <Link to='/characterdetails'>Character Details</Link> */}
    </div>    
  )
}

export default Home