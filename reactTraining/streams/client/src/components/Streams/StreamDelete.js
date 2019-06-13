import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchSingle, deleteStream} from "../actions";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchSingle(this.props.match.params.id);
        
    };
    
    deleteStream = () => {
        this.props.deleteStream(this.props.match.params.id);
    };
    
    renderActions() {
        return(
             <div>
                 <button className={"ui button negative"} onClick={this.deleteStream} >Delete</button>
                 <Link className={"ui button"} to={"/"}>Cancel</Link>
             </div>
        );
    };
    
    renderContent = () => {
      if(!this.props.stream){
          return 'Are you sure you want to delete?'
      }
      return `Are you sure you want to delete the stream with the title: ${this.props.stream.title}`;
    };
    
    
    render() {
        return (
                 <Modal title={"Delete Stream"} content={this.renderContent()}
                        actions={this.renderActions()} onDismiss={() => history.push('/')}/>
        );
        
    };
    
};

    const mapStateToProps = (state, ownprops) =>{
        return {stream: state.streams[ownprops.match.params.id]}
    };
    
export default connect(mapStateToProps, {fetchSingle, deleteStream})(StreamDelete);