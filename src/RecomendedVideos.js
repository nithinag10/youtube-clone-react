import React from "react";
import "./RecomendedVideos.css";
import VideoCard from "./VideoCard";

function RecomendedVideos() {
  return (
    <div className='recomendedvideos'>
      <h2>Recomended</h2>
      <div className='recomendedvideos__videos'>
        <VideoCard
          image='https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&w=1000&q=80'
          title='How to live a very good life?'
          channelName='Nithin AG'
          views='5.3M'
          timestamp='4 days ago'
          channelImage='https://avatars2.githubusercontent.com/u/56193327?s=400&v=4'
        />
        <VideoCard
          image='https://miro.medium.com/max/7018/1*Y6E0MBrBaqIWekxmpQL-vg.jpeg'
          title='Do not live until you know these things'
          channelName='Nithin AG'
          views='7.8k'
          timestamp='35 minutes ago'
          channelImage='https://avatars2.githubusercontent.com/u/56193327?s=400&v=4'
        />
        <VideoCard
          image='https://www.newsclick.in/sites/default/files/2017-09/multinational-companies.jpg'
          title='How to get into MNCs?'
          channelName='Ajay Galagali'
          views='9.3M'
          timestamp='1 month ago'
          channelImage='https://avatars1.githubusercontent.com/u/52245467?s=460&u=bd0bd80c6652a482969e44c0256653b4c462990c&v=4'
        />
      </div>
    </div>
  );
}

export default RecomendedVideos;
