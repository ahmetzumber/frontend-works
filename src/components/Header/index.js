import { React, useState } from 'react'
import './header.scss';

function Header() {

    const[activePage, setActivePage] = useState();

    return (
        <div className='header'>
            <div className='header__logo-layout'>
                <p className='header__logo-layout-logo'>
                    Z U M B E R O V I C
                </p>
            </div>
            <div className='header__menu-layout'>
                <div className='header__menu-layout-grid'>
                    <div className='header__menu-layout-grid-item' onClick={() => setActivePage(0)}>
                        <div className={activePage === 0 ? 'header__menu-layout-grid-item-container header__menu-layout-grid-item-container--active' : ' header__menu-layout-grid-item-container' }>
                            <p className={activePage === 0 ? 'header__menu-layout-grid-item-container-text header__menu-layout-grid-item-container-text--active' : ' header__menu-layout-grid-item-container-text' }>HOME</p>
                        </div>
                    </div>
                    <div className='header__menu-layout-grid-item' onClick={() => setActivePage(1)}>
                        <div className={activePage === 1 ? 'header__menu-layout-grid-item-container header__menu-layout-grid-item-container--active' : ' header__menu-layout-grid-item-container' }>
                            <p className={activePage === 1 ? 'header__menu-layout-grid-item-container-text header__menu-layout-grid-item-container-text--active' : ' header__menu-layout-grid-item-container-text' }>ABOUT</p>
                        </div>
                    </div>
                    <div className='header__menu-layout-grid-item' onClick={() => setActivePage(2)}>
                        <div className={activePage === 2 ? 'header__menu-layout-grid-item-container header__menu-layout-grid-item-container--active' : ' header__menu-layout-grid-item-container' }>
                            <p className={activePage === 2 ? 'header__menu-layout-grid-item-container-text header__menu-layout-grid-item-container-text--active' : ' header__menu-layout-grid-item-container-text' }>CONTACT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
