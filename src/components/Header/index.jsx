import React from 'react'
import './style.scss'
import logo from '../../images/x140.webp'
// components
import Language from '../Language'
import Location from '../Location'
import SearchBar from '../SearchBar'
import NavBar from '../NavBar'

export default function Header() {
    return (
        <header id="header" className="header_wrap zIndex_header">
            <div className="header_container">
                <div className="top_content">
                    <div className="left">
                        <div className="menu_btn_wrap">
                            <Language />
                        </div>
                        <div className="menu_btn_wrap">
                            <Location />
                        </div>
                        <div className="menu_btn_wrap">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="middle">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="right">
                        <div className="menu_btn_wrap">
                            <span className="material-symbols-rounded member_icon">person</span>
                        </div>
                        <div className="menu_btn_wrap">
                            <span className="material-symbols-rounded">shopping_bag</span>
                            <span className="cart_numbers">2</span>
                        </div>
                    </div>
                </div>
                <div className="bottom_content">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}
