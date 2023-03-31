import React, { useEffect } from 'react'
import './style.scss'
import Layout from '../../layout'
import { isInViewport } from '../../libs/isInViewport'
import throttle from 'lodash.throttle'

export default function Home() {
    const handleScroll = () => {
        const element = document.querySelector('.loading')
        console.log('handleScroll', isInViewport(element))
    }

    useEffect(() => {
        window.addEventListener('scroll', throttle(handleScroll, 100))
    }, [])

    return (
        <div className="home_page">
            <Layout>
                <main className="home_main_wrap">
                    <div className="hero_banner_wrap" />
                    <div style={{ height: '1000px' }}>style 2000px</div>
                    <div className="loading">loading</div>
                </main>
            </Layout>
        </div>
    )
}
