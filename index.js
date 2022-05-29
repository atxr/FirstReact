// Without the CDNs we need these two lines to import React
// import React from 'react'
// import ReactDOM from 'react-dom'

function Nav() {
    return (
        <nav>
            <img src="react.png" width="40px" />
        </nav>
    )
}

function Body() {
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Is opensource</li>
                <li>Sounds very nice</li>
                <li>Most popular JS framework</li>
                <li>Next.js and Typescript</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Nav />
        <Body />
    </div>,
    document.getElementById("root"))