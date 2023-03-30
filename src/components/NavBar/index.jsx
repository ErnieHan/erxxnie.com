import React from 'react'
import './style.scss'

export default function NavBar() {
    return (
        <nav className="nav_bar_wrap">
            <ul>
                <li>
                    <a href="/" style={{ color: '#ec4211' }}>
                        NICESUNDAYS x BEAMS
                    </a>
                </li>
                <li>
                    <a href="/">NEW ARRIVALS</a>
                </li>
                <li>
                    <a href="/">CATEGORY</a>
                </li>
                <li>
                    <a href="/">EXPERIENCE</a>
                </li>
                <li>
                    <a href="/">ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}
