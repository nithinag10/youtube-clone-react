import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className='searchpage'>
      <div className='searchpage__filter'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        channelImage='https://avatars2.githubusercontent.com/u/56193327?s=400&v=4'
        channelName='Nithin AG'
        verified={true}
        subs='2.3M'
        noOfVideos={65}
        description='You can come to know 
        what life is in this channel. You have videos like dealing with all kinds of problems in you life'
      />
      <hr />

      <h5>Latest from Nithin AG</h5>

      <VideoRow
        views='12k'
        subs='2.3M'
        description='This video will tell you how you can mangae diffcult times inyour life'
        timestamp='4 days ago'
        channel='Nithin AG'
        title='How to fight depression'
        image='https://imgk.timesnownews.com/story/depression_2.gif?tr=w-560,h-292,fo-top'
      />

      <VideoRow
        views='1k'
        subs='2.3M'
        description='This video will guide you that you can still make 100k rupees from home with you laptop and a good internet connection'
        timestamp='1 month ago'
        channel='Nithin AG'
        title='Make money in your home'
        image='https://static.businessworld.in/article/article_extra_large_image/1588764948_U9I44v_WORK_FROM_HOME.jpg'
      />

      <VideoRow
        views='3M'
        subs='2.3M'
        description='Video to manage you codding skill and meeting industry standards'
        timestamp='1 days ago'
        channel='Nithin AG'
        title='How to code like a pro??'
        image='https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/03965029-6f09-4c96-b82b-8c9b2a789d24.jpg?mtime=1570205345'
      />
    </div>
  );
}

export default SearchPage;
