import { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { AiOutlineLink } from "react-icons/ai";
import { connect } from "react-redux";
import Rating from "../../components/rating"
import * as TVActions from "../../store/actions/tv.actions";
import './index.scss';

interface Props extends RouteComponentProps<{ id: string }> {
    fetchDetail: (id: string) => void,
    detail: any
}

/**
 * tv show detail
 */
class Detail extends Component<Props, {}> {

    componentDidMount() {
        const { match, fetchDetail } = this.props
        const { id } = match.params
        fetchDetail(id);
    }

    renderCastItem = (item: any, index: number) => {
        const person = item?.person
        if (!person) return null
        const { image, url, name } = person
        const { name: roleName, url: roleUrl } = item.character || {}


        return <div key={index} className="col-md-4 cast-item">
            <div className="cast-item-img">
                <img src={image?.medium} alt="cast-avatar" />
            </div>
            <div className="cast-item-right" >
                <a href={url} target="_blank" className="name" rel="noreferrer" > {name}</a>
                <p>
                    as <a href={roleUrl} target="_blank" rel="noreferrer">{roleName}</a>
                </p>
            </div>

        </div>
    }


    render() {
        const { detail = {} } = this.props
        const image = detail.image?.original || ""
        const castList = detail._embedded?.cast || []

        return <div className="container detail-content">
            {
                !detail.image ? <h2 className="loading">loading...</h2> : <>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>{detail.name}</h2>
                            <div className="row ">
                                <div className="col-sm-6 left-box">
                                    <img src={image} className="detail-cover" alt="cover" />
                                </div>
                                <div className="col-sm-6">
                                    {detail.summary && <p
                                        dangerouslySetInnerHTML={{ __html: detail.summary }}
                                    />}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-box">
                                <div className="title-box">
                                    <p>show tv</p>
                                    <Rating average={detail.rating?.average} />
                                </div>
                                {

                                    detail.schedule?.days && <p className="">
                                        <span className="label">Schedule: </span>
                                        <span>
                                            {detail.schedule.days}
                                            {
                                                detail.averageRuntime && <span>(~ {detail.averageRuntime} min)</span>
                                            }
                                        </span>
                                    </p>
                                }
                                {
                                    detail.status && <p className="">
                                        <span className="label">Status: </span>
                                        <span>{detail.status}</span>
                                    </p>
                                }
                                {
                                    Array.isArray(detail.genres) && detail.genres.length > 0 && <p className="">
                                        <span className="label">Genres: </span>
                                        <span>{detail.genres.join(" | ")}</span>
                                    </p>
                                }


                                {
                                    detail.type && <p className="">
                                        <span className="label">Show Type: </span>
                                        <span>{detail.type}</span>
                                    </p>
                                }
                                {
                                    detail.language && <p className="">
                                        <span className="label">Language: </span>
                                        <span>{detail.language}</span>
                                    </p>
                                }

                                {
                                    detail.premiered && <p className="">
                                        <span className="label">Premiered Year: </span>
                                        <span>{detail.premiered}</span>
                                    </p>
                                }
                                {
                                    detail.officialSite && <p className="">
                                        <span className="label">Official site: </span>
                                        <a target="_blank" href={detail.officialSite} rel="noreferrer"> link  <AiOutlineLink /></a>
                                    </p>

                                }

                            </div>
                        </div>
                    </div>
                    {
                        castList.length > 0 && <div className="cast-content">
                            <h2>Cast</h2>
                            <div className="row">
                                {
                                    castList.map(this.renderCastItem)
                                }

                            </div>
                        </div>
                    }
                </>
            }
        </div>
    }
}


const mapStateToProps = (state: any) => ({
    detail: state.tv.detail
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TVActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
