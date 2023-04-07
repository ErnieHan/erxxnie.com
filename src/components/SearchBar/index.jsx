import React from 'react'
import './style.scss'
import { toggle } from 'slide-element'

export default function SearchBar() {
    const handleClick = () => {
        const element = document.querySelector('#searchBarContent')
        toggle(element, { duration: 500 })
    }

    return (
        <div>
            <span className="material-symbols-rounded" onClick={handleClick}>
                search
            </span>
        </div>
    )
}
