import './style.scss'
import logo from '../../images/x140.webp'
import Layout from '../../containers/Layout'

export default function Home() {
    return (
        <main className="home_page">
            <Layout>
                <img src={logo} alt="" />
            </Layout>
        </main>
    )
}
