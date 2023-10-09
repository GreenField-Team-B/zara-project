import React from "react";
import  heartImage from './images/heart.png'
import  groupImage from './images/Group.png'
import "./oneProduct.css";
import moment from "moment";
const OneProduct = ({ product }) => {
  const createdAtmoment = moment(product.createdAt);
  const daysDifference = moment().diff(createdAtmoment, "days");
  const isNew = daysDifference <= 7;
  return (
    <div className="cart">
      <div className="container-top">
      {isNew ? <p className="new-icon">New</p> : null}
        <img
          className="image"
          src={product.image}
        />
        <div className="icons">
          <img className="heart" src={heartImage} alt="heart"/>
          <img className="quick-view" src={groupImage} alt="group" />
        </div>
      </div>

      <div className="inf">
        <div>
          <h2 className="name">{product.name}</h2>
        </div>
        <div className="frame">
          <p className="price">${product.price}</p>
          <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
          <p className="number">(99)</p>
        </div>
        <div className="color">
          <p>{product.color}</p>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
