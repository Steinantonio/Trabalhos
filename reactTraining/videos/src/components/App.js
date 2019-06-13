import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyA1ETRzILZBOl6uJEnBBNbYWUSE5xd4UcQ';


class App extends React.Component {
    state = {videos: [], selectedVideo: null};
    
    onTextInputSubmit = async (inputText) => {
        const response = await youtube.get('/search', {
            params: {
                q: inputText,
                part: "snippet",
                maxResults: 15,
                key: KEY
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    };
    
    // passing as param video because that is the return of the map array on videoLIst
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };
    
    componentDidMount() {
        this.onTextInputSubmit('Programming is Awesome');
    };
    
    render() {
        return (
             <div className={"ui container"}>
                 <SearchBar onTextInputSubmit={this.onTextInputSubmit}/>
                 
                 <div className={"ui grid"}>
                     <div className={"ui row"}>
                         <div className={"eleven wide column"}>
                             <VideoDetail SelectedVideo={this.state.selectedVideo}/>
                         </div>
                         
                         <div className={"five wide column"}>
                             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                         </div>
                     </div>
                 </div>
             </div>
        );
    };
    
};


export default App;