import Slider from "react-slick";
import styled from "styled-components";
import {
  TopBannerNextArrow,
  TopBannerPrevArrow,
} from "../common/button/ArrowBtns";

const topBanner_settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <TopBannerNextArrow />,
  prevArrow: <TopBannerPrevArrow />,
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

  .prev-arrow {
    left: -6%;
    top: 45%;
  }

  .next-arrow {
    right: -6%;
    top: 45%;
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
