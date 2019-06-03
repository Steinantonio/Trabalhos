import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spiner.js';




class App extends React.Component {
    // defining
    state = {latitude: null, errorMs: '' };  // this generate a constructor that already call the props system
    
    
    componentDidMount() {
     
        window.navigator.geolocation.getCurrentPosition(
             position => this.setState({latitude: position.coords.latitude}),
             positionError => this.setState({errorMs: positionError.message})   // set state re-render de component and also the children
        );
    };
    
    
    //render is required to work
    renderContent() {
        if (this.state.errorMs && !this.state.latitude) {
            return (
                 <div>
                     Error : {this.state.errorMs}
                 </div>
            );
        };

        if (!this.state.errorMs && this.state.latitude) {
            return (
                 <SeasonDisplay latitude={this.state.latitude}/>  // Passing latitude state, to season display using props
            );
        };
        
        return (<Spiner  message={"Accept location please!"}/>)
        
    };
    
    render(){
        return(
          <div className={"borderRed"}>
              {this.renderContent()};
          </div>
        );
        
    };
};

ReactDom.render(<App/>, document.querySelector('#root'))

