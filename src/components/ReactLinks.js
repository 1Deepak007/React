import React from 'react';
import { Link } from 'react-router-dom';


export default function ReactLinks() {
  return (
    <>
        <h2 className='text-center'>Links</h2>
        <br/>
        <Link to='/'>Home</Link>
        <Link to='/Users'>Function Based Components</Link>
        <link rel='icon' href='../icons/react_icon.svg'></link>
    </>
  )
}
