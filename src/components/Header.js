import React from 'react'
import AddMovie from './AddMovie';


const Header = ({add}) => {

  
  return (
    <div>
<div className='header'>
  <h1 className='title'>Movie List</h1>
<AddMovie add={add} />
</div>
</div>
    );
}


export default Header