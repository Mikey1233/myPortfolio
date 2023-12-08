import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './rootLayout.css'
function RootLayout() {
  return (
    <div className='root-layout'>
      <div className='root-layout-navlist-container'>
        <nav>
          <ul className='root-layout-navlist'>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'about'}><li>About</li></NavLink>
            <NavLink to={'projects'}><li>Projects</li></NavLink>
            <NavLink to={'contact'}><li>Contact</li></NavLink>
          </ul>
        </nav>
      </div>
      <div className='outlet'>
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout
