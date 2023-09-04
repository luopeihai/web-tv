import { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import List from "../../components/list";
import Rating from "../../components/rating"
import Image from "../../components/image"
import * as TVActions from "../../store/actions/tv.actions";
import * as FollowActions from "../../store/actions/follow.actions";
import { ShowTVInfo } from "../../common/types";
import './index.scss';

interface HomeProps {
    /**
     * redux fetch data
     */
    fetchTVData: () => void,
    loadFollowData: () => void,
    toggleFollow: (id: string) => void,
    infoTV: {
        data: ShowTVInfo[]
    },
    follow: string[]
}




/**
 * 首页
 */
class Home extends Component<HomeProps, {}> {

    componentDidMount() {
        const { fetchTVData, loadFollowData } = this.props;
        fetchTVData();
        loadFollowData()
    }
    // follow/unfollow
    handleFollow(event: any, id: string) {
        event.preventDefault()
        const { toggleFollow } = this.props
        toggleFollow && toggleFollow(id)
    }



    renderItem = (item: ShowTVInfo) => {
        const { follow } = this.props
        return <div className="col-md-3 item" key={item.id}>
            <Link to={`shows/${item.id}`}>
                <Image className="cover" src={item.image?.medium} alt="cover" />
                <h3>{item.name}</h3>
                <p className="type">{item.type}</p>
                <div className="bottom">
                    <div className="bottom-left">
                        <Rating average={item.rating?.average} />
                    </div>
                    <div className="bottom-right" onClick={(event) => this.handleFollow(event, item.id)}>
                        {
                            follow.includes(item.id) ? <AiFillHeart /> : <AiOutlineHeart />
                        }

                    </div>
                </div>
            </Link>
        </div>
    }

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
    follow: state.follow.data
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(TVActions, dispatch),
    ...bindActionCreators(FollowActions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);