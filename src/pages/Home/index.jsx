import React, { useEffect } from 'react'
import './style.scss'
import Layout from '../../layout'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from '../../store/actions/get'

export default function Home() {
    const dispatch = useDispatch()
    const language = useSelector(state => state.set.language)

    useEffect(() => {
        dispatch(getEmployees())
        console.log('update')
    }, [])

    return (
        <Layout page="home">
            <main className="home_main_wrap">
                <div className="hero_banner_wrap" />
                <div style={{ height: '1000px' }}>style 2000px</div>
                <div className="loading">loading</div>
            </main>
        </Layout>
    )
}
