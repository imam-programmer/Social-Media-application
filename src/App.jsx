import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";


const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home")
  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">

      <Header />
      {
        selectedTab==="Home"?<PostList/>:<CreatePost/>
      }
      
      
      <Footer/>
      </div>
    </div>
  );
};

export default App;
