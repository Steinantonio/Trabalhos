import React from 'react';



class SearchBar extends React.Component {
    state = {inputText:''};
    
    onInputChange = (event) => {
        this.setState({inputText:event.target.value}); // remember to always use target.value
    };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTextInputSubmit(this.state.inputText);
    };
    
    
    render() {
        return (
             <div className={"search-bar ui segment"}>
                 <form className={"ui form"} onSubmit={this.onFormSubmit}>
                     <div className={"field"}>
                         <label>Video Search</label>
                         <input type={"text"} onChange={this.onInputChange} defaultValue={this.state.inputText}/>
                     </div>
                 </form>
             </div>
        );
    };
};

export default SearchBar;