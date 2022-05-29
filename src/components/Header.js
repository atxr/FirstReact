import reactLogo from "../images/react.png"

export default function Header() {
    return (
        <nav className="nav">
            <img src={reactLogo} className="react-logo" alt="react-logo" />
            <ul className="nav-items">
                <li>Home</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}