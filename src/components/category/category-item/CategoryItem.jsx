import React from "react";
import "./categoryItem.styles.scss";
export default function CategoryItem({ categoryItem }) {
  const { imageUrl, title } = categoryItem;
  return (
    <div className="categoryItem-container">
      <div
        className="categoryItem-bg-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="categoryItem-body-container">
        <h2>{title}</h2>
        <p> Buy Now</p>
      </div>
    </div>
  );
}
