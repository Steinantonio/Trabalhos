import _ from 'lodash';
import React from 'react'
import {fetchSingle, updateStream} from "../actions";
import {connect} from "react-redux";
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
    componentDidUpdat() {
        this.props.fetchSingle(this.props.match.params.id);
        
    };
    
    onSubmit = (formValues) => {
        this.props.updateStream(this.props.match.params.id,formValues);
    };
    
    render() {
        if (!this.props.streams) {
            return (
                 <div>
                     <div className="ui active inverted dimmer">
                         <div className="ui text loader">Loading...</div>
                     </div>
                 </div>
            );
        } else {
            return (
                 <div>
                     <p/>
                     <h3>Edit a Stream</h3>
                     <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.streams, 'title', 'description')}/>
                 </div>
            );
        }
    };
    
};



const mapStateToProps = (state, ownProps) => {
    
    return {streams: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchSingle, updateStream})(StreamEdit);