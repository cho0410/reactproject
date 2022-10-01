import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";
import UnsplashSearch from "../includes/UnsplashSearch";
import { useState, useEffect } from "react";

function Unsplash() {
  const [images, setImages] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=mFECGVL_TqkRIXFf7xaq9EHC0FKBKKiVO-lpGqRm2DI`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/search/photos?query=london&client_id=mFECGVL_TqkRIXFf7xaq9EHC0FKBKKiVO-lpGqRm2DI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;
