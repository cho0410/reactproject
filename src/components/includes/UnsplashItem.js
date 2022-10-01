import React from "react";
import DefaultImg from "../../assets/img/default_img.jpg";

function UnsplashItem(props) {
  const UnsplashImg = `${props.results.poster_path}`;

  return (
    <li>
      <a
        href={`https://https://api.unsplash.com/search/photos/${props.results.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {UnsplashImg === "null" ? (
          <img src={DefaultImg} alt={props.results.title} />
        ) : (
          <img
            src={`https://api.unsplash.com/photos/w500/${UnsplashImg}`}
            alt={props.results.title}
          />
        )}
        <p>{props.results.title}</p>
      </a>
    </li>
  );
}

export default UnsplashItem;
