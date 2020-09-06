import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecomendedVideos";

import "./App.css";

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__webpage'>
        <Sidebar />
        <RecomendedVideos />
      </div>

    </div>
  );
}

export default App;
