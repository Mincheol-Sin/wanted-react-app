import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const TopBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1802%2F4480ef99.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1422%2Fb4a42a0f.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1794%2F5db4820b.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1804%2F46348b23.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1795%2F05d726f2.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1793%2F07342bec.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1589%2F4d187185.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1785%2Ff28ae1db.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1806%2F55d3cb39.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1805%2Fc888f442.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1750%2F62c0f917.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1784%2F2709f64c.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1792%2F50191ad1.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1795%2F05d726f2.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1804%2F46348b23.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1802%2F4480ef99.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1785%2Ff28ae1db.jpg&w=1060&q=100" />
        </CardContainer>
        <CardContainer>
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1422%2Fb4a42a0f.jpg&w=1060&q=100" />
        </CardContainer>
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin-top: 50px;
  padding-top: 25px;
  width: 100%;
`;

const CardContainer = styled.div`
  padding: 0 10px;
`;

export default TopBanner;
