import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";
import { useState, useEffect } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);

  const search = (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyDp8exroG-zW6ZD6mUJe0QRmYhG9SQmTVM&maxResults=28&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.results));
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyDp8exroG-zW6ZD6mUJe0QRmYhG9SQmTVM&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "Api"]} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
