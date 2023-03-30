import React from 'react'
import './style.scss'
// components
import Announcement from '../../components/Announcement'
import Header from '../../components/Header'

export default function Layout({ children }) {
    return (
        <div className="layout_wrapper">
            <Announcement />
            <Header />
            {children}
        </div>
    )
}
