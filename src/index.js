// Without the CDNs we need these two lines to import React
import React from 'react'
import ReactDOM from 'react-dom'

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

function App() {
    return (
        <div className="page">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))