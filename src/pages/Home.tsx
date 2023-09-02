import React, { Component } from "react";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import VirtualizedList from "../components/VirtualizedList";
import * as TVActions from "../store/actions/tv.actions";
import './Home.scss';

interface IHome {
    fetchTVData: () => void,
    infoTV: {
        data: any[]
    }
}



class Home extends Component<IHome, {}> {

    componentDidMount() {
        const { fetchTVData } = this.props;
        fetchTVData();
    }

    renderItem = (index: number) => {
        const { infoTV } = this.props
        const item = infoTV.data[index]
        return item && <div className="item" key={`${item.name}-${index}`}>
            <img className="cover" src={item.image.medium} alt="cover" />
            <h3>{item.name}</h3>
            <p className="type">{item.type}</p>
            <div className="bottom">
                <div className="bottom-left">
                    <AiOutlineStar />
                    <span>{item.rating.average}</span>
                </div>
                <div className="bottom-right">
                    <AiOutlineHeart />
                </div>
            </div>
        </div>

        // const { infoTV } = this.props
        // const list = infoTV.data[index]
        // return list.map((item: any, subIndex: number) => <div className="item" key={`${item.name}-${subIndex}`}>
        //     <img className="cover" src={item.image.medium} alt="cover" />
        //     <h3>{item.name}</h3>
        //     <p className="type">{item.type}</p>
        //     <div className="bottom">
        //         <div className="bottom-left">
        //             <AiOutlineStar />
        //             <span>{item.rating.average}</span>
        //         </div>
        //         <div className="bottom-right">
        //             <AiOutlineHeart />
        //         </div>
        //     </div>
        // </div>)
    }

    render() {
        const { infoTV } = this.props
        const itemCount = (infoTV.data || []).length

        return <div className="container">
            <section >
                <VirtualizedList rowCount={4} containerHeight={700} itemCount={itemCount} itemHeight={300} renderItem={this.renderItem} />
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