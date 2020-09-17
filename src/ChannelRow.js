import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({
  channelImage,
  channelName,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className='channelrow'>
      <Avatar
        alt={channelName}
        src={channelImage}
        className='channelRow__avatar'
      />

      <div className='channelRow__text'>
        <h4>
          {channelName} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} Subscribers . {noOfVideos} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
