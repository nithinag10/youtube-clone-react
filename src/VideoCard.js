//Title
//Channel name
//No of views
//time stamp
//Avatar
//Two images are used in this...

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './Videocard.css'

function VideoCard({
  image,
  title,
  channelName,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videocard">
      <img className='videocard__thumbnail' src={image} alt='' />
      <div className='videocard__info'>
        <Avatar
          className='videocard__avatar'
          alt={channelName}
          src={channelImage}
        />
        <div className='videocard__text'>
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
