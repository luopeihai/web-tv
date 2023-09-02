import React, { Component } from "react";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TVActions from "../store/actions/tv.actions";

import './Home.scss';

interface IHome {
    fetchTVData: () => void
}
class Home extends Component<IHome, {}> {
    componentDidMount() {

        const { fetchTVData } = this.props;
        fetchTVData();
    }

    render() {
        return <div className="container">
            <section className="movie-list">
                <div className="item">
                    <img className="cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="cover" />
                    <h3>Under the Dome</h3>
                    <p className="type">Talk Show</p>
                    <div className="bottom">
                        <div className="bottom-left">
                            <AiOutlineStar />
                            <span>7.0</span>
                        </div>
                        <div className="bottom-right">
                            <AiOutlineHeart />
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img className="cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="cover" />
                    <h3>Under the Dome</h3>
                    <p className="type">Talk Show</p>
                    <div className="bottom">
                        <div className="bottom-left">
                            <AiOutlineStar />
                            <span>7.0</span>
                        </div>
                        <div className="bottom-right">
                            <AiOutlineHeart />
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img className="cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="cover" />
                    <h3>Under the Dome</h3>
                    <p className="type">Talk Show</p>
                    <div className="bottom">
                        <div className="bottom-left">
                            <AiOutlineStar />
                            <span>7.0</span>
                        </div>
                        <div className="bottom-right">
                            <AiOutlineHeart />
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img className="cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="cover" />
                    <h3>Under the Dome</h3>
                    <p className="type">Talk Show</p>
                    <div className="bottom">
                        <div className="bottom-left">
                            <AiOutlineStar />
                            <span>7.0</span>
                        </div>
                        <div className="bottom-right">
                            <AiOutlineHeart />
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img className="cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="cover" />
                    <h3>Under the Dome</h3>
                    <p className="type">Talk Show</p>
                    <div className="bottom">
                        <div className="bottom-left">
                            <AiOutlineStar />
                            <span>7.0</span>
                        </div>
                        <div className="bottom-right">
                            <AiOutlineHeart />
                        </div>

                    </div>
                </div>
                <div className="item">
                    <img className="cover" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="cover" />
                    <h3>Under the Dome</h3>
                    <p className="type">Talk Show</p>
                    <div className="bottom">
                        <div className="bottom-left">
                            <AiOutlineStar />
                            <span>7.0</span>
                        </div>
                        <div className="bottom-right">
                            <AiOutlineHeart />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    }
}


const mapStateToProps = (state: any) => ({
    tv: state.tv,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TVActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);