import React from 'react'
import './style.scss'
import Layout from '../../containers/Layout'

export default function Home() {
    return (
        <div className="home_page">
            <Layout>
                <main className="home_main_wrap">
                    <div className="hero_banner_wrap" />
                    <div style={{ height: '2000px' }}>here is the section</div>
                </main>
            </Layout>
        </div>
    )
}
