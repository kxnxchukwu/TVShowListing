import React from 'react';
import { Store } from '../Store';
import { Link } from 'react-router-dom';


const Header = (props: any):JSX.Element => {
  const {state} = React.useContext(Store);
  return (
    <>
    <header className='header'>
    <div>
    <h1>Girls</h1>
    <p>Pick your favourite episode!</p>
    </div>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/faves'><h3>{`You have ${state.favourites.length} Favourites`}</h3></Link>
    </div>
    </header>
    </>
  )
}

export default Header;