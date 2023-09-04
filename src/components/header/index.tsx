import { Component } from "react"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as TVActions from "../../store/actions/tv.actions";
import './index.scss';
import logo from "./logo.png"
import avatar from "./avatar.jpg"

interface IHeaderProps {
    searchTVData: (value: string) => void,
}


interface IHeaderStates {
    value: string
}



// 头部组件
class Header extends Component<IHeaderProps, IHeaderStates> {

    constructor(props: IHeaderProps) {
        super(props)
        this.state = {
            value: "" // input value值     
        }
    }


    // 触发请求数据
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const { value } = this.state
        const { searchTVData } = this.props
        event.preventDefault()
        value.length > 0 && searchTVData(value)
    }

    // 监听输入
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return <header className="header">
            <div className="header-content">
                <div className="left">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="center">
                    <form className="search-box" onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} />
                        <button><AiOutlineSearch /></button>
                    </form>
                </div>
                <div className="right">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </header >
    }
}


const mapStateToProps = (state: any) => ({
    infoTV: state.tv,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TVActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);