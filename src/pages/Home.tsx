import React, { Component } from "react";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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

    render() {
        const { infoTV } = this.props
        const currentData = Array.isArray(infoTV.data) ? infoTV.data.slice(0, 20) : []
        console.log('currentData', currentData)

        return <div className="container">
            <section className="movie-list">
                {
                    currentData.map((item, index) => {
                        return <div className="item" key={`${item.name}-${index}`}>
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
                    })
                }

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