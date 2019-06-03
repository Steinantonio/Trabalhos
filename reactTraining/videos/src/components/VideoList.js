import React from 'react';
import VideoItem from '../components/VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    
    const list = videos.map(videoElement => {
        return (<VideoItem video={videoElement} onVideoSelect={onVideoSelect} key={videoElement.id.videoId}/>);
    });
    
    
    return (<div className={"ui relaxed divided list"}>{list}</div>);
};


export default VideoList;