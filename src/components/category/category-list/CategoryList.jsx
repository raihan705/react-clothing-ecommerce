import React from "react";
import categoryData from "../category-json-data/categoryData";
import "./categoryList.styles.scss";
import CategoryItem from "../category-item/CategoryItem";

export default function CategoryList() {
  return (
    <div className="categoryList-container">
      {categoryData.map((item) => (
        <CategoryItem key={item.id} categoryItem={item} />
      ))}
    </div>
  );
}
