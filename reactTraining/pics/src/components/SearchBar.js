import React from 'react';

class SearchBar extends React.Component {
    state = {
        textInput: ''
    };
    
    // this is the callback another function handler, inside it calls my callback
    onformSubmit = (event) => {
        event.preventDefault()
        
        //here is receiving as prop my onSubmit function that i created on the parent APP, passing the value of state text input
        this.props.onSubmit(this.state.textInput)
    };
    
    render() {
        return (
             <div className={"ui segment"}>
                 <form className={"ui form"} onSubmit={this.onformSubmit}>
                     <div className={"field"}>
                         <label className={"label"}>Image Search</label>
                         <input type={"text"} className={"ui input focus"} value={this.state.textInput}
                                onChange={event => this.setState({textInput: event.target.value})}/>
                     </div>
                 </form>
             </div>
        );
    };
};

export default SearchBar;