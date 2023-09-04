import { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import List from "../../components/list";
import Rating from "../../components/rating"
import Image from "../../components/image"
import * as TVActions from "../../store/actions/tv.actions";
import './index.scss';

interface IHome {
    fetchTVData: () => void,
    infoTV: {
        data: any[]
    }
}


/**
 * 首页
 */
class Home extends Component<IHome, {}> {

    componentDidMount() {
        const { fetchTVData } = this.props;
        fetchTVData();
    }

    renderItem = (item: any) => <div className="col-md-3 item" key={item.id}>
        <Link to={`shows/${item.id}`}>
            <Image className="cover" src={item.image?.medium} alt="cover" />
            <h3>{item.name}</h3>
            <p className="type">{item.type}</p>
            <div className="bottom">
                <div className="bottom-left">
                    <Rating average={item.rating?.average} />
                </div>
                <div className="bottom-right">
                    <AiOutlineHeart />
                </div>
            </div>
        </Link>
    </div>

    render() {
        const { infoTV } = this.props
        const data = (infoTV.data || [])

        return <div className="container">
            <section>
                <List data={data} renderItem={this.renderItem} />
            </section>
        </div>
    }
}


const mapStateToProps = (state: any) => ({
    infoTV: state.tv,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TVActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);