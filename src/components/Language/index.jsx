import React from 'react'
import './style.scss'

export default function Language() {
    return (
        <div className="language_wrap">
            <div className="switch_btn">
                <span className="material-symbols-rounded">language</span>
                <span>繁體中文</span>
                <span className="material-symbols-rounded">expand_more</span>
            </div>
        </div>
    )
}
