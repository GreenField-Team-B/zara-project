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
          src="https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1697414400&Signature=cHgvjZ3w5dwEDTk38l11QBqMYrD5eYG1K3AXU5vbSTV0LqDOLHeL5bahveT61CDmnZ-VBpmN7IS2VdFBvwn0hbptVK3BTI6vj6LOe~gY20MpdrxwixYcCMEzGOsWLzwFdLgTSiDwar-ZNepiQPbPE0nE8zwkVSvhSoCPwZ-Rl8g10t~9e8GmABRGLENyfBMpdN~2YeaOsfw4o2xfkHBx8Wnnoib2IVCzHmHBQiTqCBLjj8OQ5gZ~EVAOzem7BuxVyCqCufKrdDAV~ZbPRwCiemNA74xz7u2OqyBfaBgiydWgCU0QXhSkclnJjXunrB4IP~9C9P39ST2kre5WkJWwVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
