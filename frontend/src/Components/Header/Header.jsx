import React, {useState} from 'react'
import './Header.css'
import MainNavbar from '../MainNavbar/MainNavbar'
import SearchBar from '../SearchBar/SearchBar'
import SecondaryNavbar from '../SecondaryNavbar/SecondaryNavbar'


function Header() {
  const [isSecondaryNavbarActive, setIsSecondaryNavbarActive] = useState(false);
  const [isSearchbarMenuActive, setIsSearchbarMenuActive] = useState(false);

  return (
    <header className='header'>
        <MainNavbar  setIsSearchbarMenuActive={setIsSearchbarMenuActive} setIsSecondaryNavbarActive={setIsSecondaryNavbarActive} />
        <SearchBar isSearchbarMenuActive={isSearchbarMenuActive} setIsSearchbarMenuActive={setIsSearchbarMenuActive} />
        <SecondaryNavbar isSecondaryNavbarActive={isSecondaryNavbarActive} setIsSecondaryNavbarActive={setIsSecondaryNavbarActive} />
    </header>
  )
}

export default Header