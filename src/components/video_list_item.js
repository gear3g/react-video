import React, { Component } from 'React';

export default class VideoListItem  extends Component {

    constructor(props) {
        super(props);

        this.video = {};
    }

    render() {
        const onVideoSelectCallback = this.props.onVideoSelect;
        const video = this.props.video;
        const thumbnailUrl =  video.snippet.thumbnails.default.url;
        const title = video.snippet.title;

        return (
            <li onClick={() => onVideoSelectCallback(video)} className="list-group-item">
                <div className="video-list-media">
                    <div className="media-left">
                        <img className="media-object" src={thumbnailUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{title}</div>
                    </div>
                </div>
            </li>
        );
    }
}