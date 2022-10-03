import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CareerCard = (props) => {
  return (
    <CareerContentCard to="/">
      <div className="CareerContentCard-Thumnail">
        <img src={props.data.thumNail} alt={props.data.title} />
      </div>
      <p className="CareerContentCard-Title">{props.data.title}</p>
      <p className="CareerContentCard-Desc">{props.data.desc}</p>
      <div className="CareerContentCard-Info">
        <img src={props.data.infoIcon} alt={props.data.infoIconAlt} />
        <p>{props.data.info}</p>
      </div>
    </CareerContentCard>
  );
};

const CareerContentCard = styled(Link)`
  .CareerContentCard-Thumnail {
    position: relative;
    padding-bottom: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .CareerContentCard-Thumnail img {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .CareerContentCard-Title {
    font-weight: 700;
    font-size: 16px;
    margin: 17px 0 8px;
  }

  .CareerContentCard-Desc {
    margin-top: 6px;
    font-weight: 600;
    font-size: 13px;
    color: #aaa;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .CareerContentCard-Info {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }

  .CareerContentCard-Info img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ececec;
  }

  .CareerContentCard-Info p {
    margin-left: 10px;
    font-weight: 600;
    color: #aaa;
  }
`;

export default CareerCard;
