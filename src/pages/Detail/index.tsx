import { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TVActions from "../../store/actions/tv.actions";
import './index.scss';

interface Props extends RouteComponentProps<{ id: string }> {
    fetchDetail: (id: string) => void,
    detail: any
}


class Detail extends Component<Props, {}> {

    componentDidMount() {
        const { match, fetchDetail } = this.props
        const { id } = match.params
        fetchDetail(id);
    }

    render() {
        const { detail } = this.props
        console.log('detail', detail)
        return <div className="detail-content">
            详情
        </div>
    }
}


const mapStateToProps = (state: any) => ({
    detail: state.tv.detail
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TVActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);