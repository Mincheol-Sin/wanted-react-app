import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { NextArrowBtn, PrevArrowBtn } from "./button/ArrowBtns";
import ArticleCard from "./card/ArticleCard";

const SLIDER_SETTINGS_1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <NextArrowBtn />,
  prevArrow: <PrevArrowBtn />,
};

const SlideSection = (props) => {
  let data = props.data;

  return (
    <Wrapper className="section-wrapper">
      <div className="banner-header">
        <h2 className="title">{props.title}</h2>
        <a href="/">
          {props.subTitle} {">"}
        </a>
      </div>
      <Slider {...SLIDER_SETTINGS_1}>
        {data.map((item) => {
          return (
            <ArticleCard
              version="2"
              href={item.href}
              thumbnail={item.thumbnail}
              title={item.title}
            />
          );
        })}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .banner-header {
    text-align: center;
    margin-bottom: 20px;

    .title {
      font-size: 22px;
      font-weight: 700;
    }

    a {
      color: #767676;
      font-size: 15px;
    }
  }

  .prev-arrow {
    top: -70px;
    left: 10px;
  }

  .next-arrow {
    top: -70px;
    right: 10px;
  }
`;

export default SlideSection;
