import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
