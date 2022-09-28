import styled from "styled-components";
import Slider from "react-slick";

const Main = () => {
  const topbanner_settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

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

  const careerContent_settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <TopBanner>
        <Slider {...topbanner_settings}>
          {main_topBanner_data.map((data) => {
            return (
              <div className="topBanner-slide">
                <img src={data.img} alt="" />
              </div>
            );
          })}
        </Slider>
      </TopBanner>
      <CareerContent>
        <h2>나에게 필요한 커리어 인사이트</h2>
        <div className="careerContent-slider">
          <Slider {...careerContent_settings}>
            <button type="button">리더십</button>
            <button type="button">커리어고민</button>
            <button type="button">취업/이직</button>
            <button type="button">조직문화</button>
            <button type="button">라이프스타일</button>
            <button type="button">인간관계</button>
            <button type="button">회사생활</button>
            <button type="button">IT/기술</button>
            <button type="button">마케팅</button>
            <button type="button">서비스기획</button>
            <button type="button">개발</button>
            <button type="button">데이터</button>
            <button type="button">HR</button>
            <button type="button">MD</button>
            <button type="button">노무</button>
            <button type="button">경영/전략</button>
            <button type="button">브랜딩</button>
            <button type="button">디자인</button>
            <button type="button">UX/UI</button>
            <button type="button">콘텐츠 제작</button>
          </Slider>
        </div>
      </CareerContent>
      <CreatorBanner>
        <div className="creatorBanner-container">
          <div className="title">
            즐겨보는&nbsp;<span>크리에이터의</span>&nbsp;글도 추천하고 싶다면?
            <img src="imgs/creatorBanner.webp" alt="크리에이터 추천하기" />
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfElPZfmbfV96-Jh21kfw62ecVzcBwsxOh-Wsrj-oUQcEhJ1g/viewform">
            크리에이터 추천하기
          </a>
        </div>
      </CreatorBanner>
    </>
  );
};

const TopBanner = styled.div`
  width: 90%;
  width: 1060px;
  padding-top: 25px;
  margin: 50px auto 0 auto;

  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-slide img {
    border-radius: 5px;
    max-width: 100%;
  }

  .slick-arrow {
    z-index: 10;
  }
`;
const CareerContent = styled.section`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 60px 0;

  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
  }

  .careerContent-slider {
    margin: 30px 0;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    margin-right: 10px;
  }

  .careerContent-slider button {
    height: 50px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #f2f4f7;
    background-color: #f2f4f7;

    :focus,
    :hover {
      font-weight: 700;
      background-color: #fff;
      border: 1px solid #36f;
      border-radius: 5px;
      color: #36f;
    }
  }
`;
const CreatorBanner = styled.div`
  display: flex;
  height: 110px;
  background-color: #36f;

  .creatorBanner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto;
  }

  .creatorBanner-container .title {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.2px;
  }

  .creatorBanner-container .title span {
    color: #a9ecf0;
  }

  .creatorBanner-container a {
    color: #36f;
    background-color: #fff;
    padding: 8px 50px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: 700;
  }
`;
export default Main;
