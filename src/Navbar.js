import React, { useState, useEffect } from 'react';
import Logo from './images/smartelogo.png'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import './Test.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  const [scrolled, setScrolled] = useState(false);



  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar'];

  if (scrolled) {
    navbarClasses.push('scroll');
  }


  const menu2 = (
    <Menu>
      <Menu.Item key="0">
        <Link to='/' style={{ textDecoration: "none" }}>
          <div style={{ color: "#07478C", padding: "8px" }}>Discover</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/' style={{ textDecoration: "none" }}>
          <div style={{ color: "#07478C", padding: "8px" }}>Enrich</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/' style={{ textDecoration: "none" }}>
          <div style={{ color: "#07478C", padding: "8px" }}>Bespoke</div>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const MenuItems = [
    {
      title: 'HOME',
      url: '/',
      
    },
    {
      title: <Dropdown overlay={menu2} trigger={['hover']}>
          <div onClick={e => e.preventDefault()}>
            PRODUCTS<i className="fas fa-caret-down" />
          </div>
      </Dropdown>,
      url: '/',
      
    },
    {
      title:'LOGIN' ,
      url: '/',
      
    },
  ]

  return (
    <>
    <nav className={navbarClasses.join(" ")}>
      <Link to='/'>
     <img src={Logo} alt="" width="100px" height="80px" style={{marginLeft:"2rem"}}/> 
      </Link>
      <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} style={{ textDecoration: "none" }}>
                <div style={{color:"#2b2b2b",padding:"1rem"}}>{item.title}</div>
              </Link>
            </li>
          )
        })}
       
      </ul>
    </nav>
    </>
  )
}


export default withRouter((Navbar));
