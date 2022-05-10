import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Menu from './Menu'

function Header({onScroll}) {

  const scroll = (e) => {
    onScroll(e.currentTarget.id)
  }

  return (
      <div className='fixed w-full flex z-50'>
          <Menu
            scroll={scroll}
          />
          <HamburgerMenu
            scroll={scroll}
          />
      </div>
  )
}

export default Header