import { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TVActions from "../../store/actions/tv.actions";
import './index.scss';

interface Props {
    id?: string
}

class Detail extends Component<RouteComponentProps<Props>, {}> {

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id)
    }



    render() {
        return <div className="container">
            详情
        </div>
    }
}


const mapStateToProps = (state: any) => ({
    infoTV: state.tv,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TVActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);