import React from 'react'
import './style.scss'

export default function SearchBarContent() {
    return (
        <div id="searchBarContent" className="search_bar_content">
            <div className="search_input_wrap">
                <span className="material-symbols-rounded search_icon">search</span>
                <input type="text" name="searchText" className="search_input" placeholder="搜尋" />
            </div>
            <div className="keywords_wrap">
                熱門關鍵字
                <span className="divider">|</span>
                <a href="/search?searchText=ring" className="keyword_link">
                    上衣
                </a>
                <a href="/search?searchText=bracelet" className="keyword_link">
                    褲子
                </a>
                <a href="/search?searchText=earrings" className="keyword_link">
                    外套
                </a>
                <a href="/search?searchText=promessa" className="keyword_link">
                    BEAMS
                </a>
            </div>
        </div>
    )
}
