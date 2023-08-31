import './Header.css';
import logo from "./logo.png"
import avatar from "./avatar.jpg"

function Header() {
    return <header className="header">
        <div className="left">
            <img src={logo} alt="Logo" />;
        </div>
        <div className="center">
            <form className="search-box">
                <input />
                <button>搜索</button>
            </form>
        </div>
        <div className="right">
            <img src={avatar} alt="avatar" />
        </div>
    </header>
}

export default Header