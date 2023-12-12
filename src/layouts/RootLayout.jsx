import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useRef, useEffect, useState } from "react";
import './rootLayout.css'
function RootLayout() {
  const observer = useRef(null);
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFade(true);
        } else {
          setFade(false);
        }
      },
      { threshold: 0.5 } 
    );

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fade]); // Re-run the effect when the items change

  return (
    <div className='root-layout' ref={containerRef}>
      <div className='root-layout-navlist-container'>
        <nav>
          <ul className={fade ? "root-layout-navlist":"root-layout-navlist blur"}>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'about'}><li>About</li></NavLink>
            <NavLink to={'projects'}><li>Projects</li></NavLink>

            <NavLink to={'blogs'}><li>Blogs</li></NavLink>

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
