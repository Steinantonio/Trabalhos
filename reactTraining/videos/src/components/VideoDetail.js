import React from 'react';

const VideoDetail = ({SelectedVideo}) => {
    if (!SelectedVideo){
        return (
             
             <div className={"ui segment"}>
                 <div class="ui active dimmer">
                     <div class="ui loader">Loading...</div>
                 </div>
             
             </div>
        );
    };
    
    const videoSrc = `https://www.youtube.com/embed/${SelectedVideo.id.videoId}`;
    
    return (
         <div>
            
             <div className={"ui segment"}>
                 <h4 className={"ui header"}>{SelectedVideo.snippet.title}</h4>
                
                 <div className={"ui embed"}>
                     <iframe src={videoSrc} title={"VideoPlayer"} allowFullScreen={true}/>
                 </div>
                 
                 <p>{SelectedVideo.snippet.description}</p>
             </div>
         </div>
    );
};

export default VideoDetail;