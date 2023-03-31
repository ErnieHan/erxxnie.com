import React from 'react'
import './style.scss'

export default function NavBar() {
    return (
        <nav className="nav_bar_wrap">
            <ul>
                <li>
                    <a href="/category/nicesundays-x-beams" style={{ color: '#ec4211' }}>
                        NICESUNDAYS x BEAMS
                    </a>
                </li>
                <li>
                    <a href="/category/new-arrivals">NEW ARRIVALS</a>
                </li>
                <li>
                    <a href="/">CATEGORY</a>
                </li>
                <li>
                    <a href="/experience">EXPERIENCE</a>
                </li>
                <li>
                    <a href="/about-us">ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}
