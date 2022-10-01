import React from "react";

function UnsplashItem(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </li>
  );
}

function UnsplashCont({ images }) {
  return (
    <div className="Unsplash__cont">
      <div className="container">
        <div className="Unsplash__list">
          <ul>
            {images.map((image) => (
              <UnsplashItem
                key={image.id}
                title={image.description}
                image={image.urls.regular}
                desc={image.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
