import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      
      <div style ={{display : 'flex',background :'black',padding:'0.5',color:'white'}}>
        <Link to="/" style={{textDecoration:'none', color:'white'}}><h1>Movies App</h1>
        </Link>
        <Link to="favourites" style={{textDecoration:'none'}}><h4 style={{marginLeft:'42rem',marginTop:'1.2rem',color:'white'}}>Favourites</h4></Link>
        </div>
        
      
      
    )
  }
}
