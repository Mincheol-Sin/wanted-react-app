import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CareerCard = (props) => {
  const careerContentData = [여기다가 props로 전송해줄 더미데이터 넣을거임];

  return (
    <CareerContentCard>
      <div className="CareerContentCard-Thumnail">
        <img src={props.thumNail} alt={props.thumNailAlt} />
      </div>
      <p className="CareerContentCard-Title">{props.title}</p>
      <div className="CareerContentCard-Info">
        <img src={props.infoIcon} alt={props.infoIconAlt} />
        <p>{props.info}</p>
      </div>
    </CareerContentCard>
  );
};

const CareerContentCard = styled(Link)`
  .CareerContentCard-Thumnail {
    padding-bottom: 70%;
  }

  .CareerContentCard-Thumnail img {
    object-fit: contain;
    background-color: #000;
    object-position: center;
  }

  .CareerContentCard-title {
    font-weight: 700px;
    font-size: 16px;
    margin: 17px 0 8px;
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
