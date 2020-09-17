import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className='videorow'>
      <img src={image} alt='' className='videorow__image' />
      <div className='videorow__text'>
        <h4>{title}</h4>

        <p>
          {channel} .
          <span className="videorow__subs">
            <span className='videorow__subsNumber'>{subs}</span>Subscribers
          </span> 
            {views}  Views . {timestamp}
        </p>

        <p className='videorow__description'>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
