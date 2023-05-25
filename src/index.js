import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscussionForum from "./pages/discussionforum";
import Topics from "./pages/Topics";
import TopicInfo from "./pages/TopicInfo";
import NewsPage from "./pages/news";
import TeamBuilder from "./pages/teambuilder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/forum" element={<DiscussionForum />} />
      <Route path="/topic" element={<Topics />} />
      <Route path="/topicinfo" element={<TopicInfo />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/teambuilder" element={<TeamBuilder />} />
    </Routes>
  </BrowserRouter>
);
