import Slider from "react-slick";
import styled from "styled-components";
import { NextArrowBtn, PrevArrowBtn } from "../common/button/ArrowBtns";

const topBanner_settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrowBtn />,
  prevArrow: <PrevArrowBtn />,
};

const main_topBanner_data = [
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg1.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg2.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg3.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg4.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg5.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg6.webp",
  },
];

const TopBanner = () => {
  return (
    <StyledSlider {...topBanner_settings}>
      {main_topBanner_data.map((data) => {
        return (
          <div className="slide">
            <img src={data.img} alt="" />
          </div>
        );
      })}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  width: 1060px;
  padding-top: 25px;
  margin: 50px auto 0 auto;

  .prev-arrow,
  .next-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    width: 40px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    background-color: #fff;
    z-index: 99;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .prev-arrow {
    left: -5%;
  }

  .next-arrow {
    right: -5%;
  }

  .slick-list {
    overflow: visible;

    .slick-slide {
      padding: 0 10px;

      img {
        border-radius: 5px;
        width: 100%;
      }
    }
  }
`;

export default TopBanner;
