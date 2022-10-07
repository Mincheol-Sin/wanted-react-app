import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import DividerLine from "../components/DividerLine";
import JobCard from "../components/common/card/JobCard";
import {
  PrevArrowBtn,
  NextArrowBtn,
} from "../components/common/button/ArrowBtns";

import FollowBtn from "../components/common/button/FollowBtn";

const JobsFeed = () => {
  const topbanner_settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn />,
    prevArrow: <PrevArrowBtn />,
  };

  const jobFeed_topBanner_data = [
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1793%2F07342bec.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1422%2Fb4a42a0f.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1794%2F5db4820b.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1804%2F46348b23.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1795%2F05d726f2.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1802%2F4480ef99.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1806%2F55d3cb39.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1805%2Fc888f442.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1784%2F2709f64c.jpg&w=1060&q=100",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1589%2F4d187185.jpg&w=1060&q=100",
    },
  ];

  const company_introduce_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const company_data = [
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F49%2F1eeyyoie3qgnqsj0__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.2bf57da8.png&w=42&q=100",
      name: "데이원컴퍼니",
      industry: "교육",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F136%2Fjhtqznnhtixesx0t__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.d2c59d45.png&w=42&q=100",
      name: "하이퍼커넥트",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F282%2Fgwsw3ljzwrbna5w1__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.950aec10.jpg&w=42&q=100",
      name: "백패커(idus)",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5394%2Fjxosc5of5rhbj82o__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.66b7615f.png&w=42&q=100",
      name: "오지큐",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F332%2Fijuur6zwf60zbflv__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.5129425e.jpg&w=42&q=100",
      name: "매드업",
      industry: "IT, 콘텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2221%2Fqb3mjyiaeytoyc7x__1080_790.png&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.c2f82a4e.jpg&w=42&q=100",
      name: "넷마블",
      industry: "IT, 콘텐츠",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F28672%2Fjerscppsk9grp4x2__1080_790.png&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.bc46812f.jpg&w=42&q=100",
      name: "모모랩스",
      industry: "제조",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F28835%2Fgllbjfuz8hk8r1u3__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.408c9307.jpg&w=42&q=100",
      name: "헥사인",
      industry: "기타 서비스업",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26113%2Frj2niggsts8hgyzz__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.6cdc51a7.jpg&w=42&q=100",
      name: "토리든",
      industry: "판매유통",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15170%2Fyjtgzxxgqbke9llp__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.51d70e95.jpg&w=42&q=100",
      name: "아이메디신",
      industry: "컨텐츠",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F519%2Fs71tual9fbehaatp__1080_790.jpg&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.ab706792.jpg&w=42&q=100",
      name: "이스턴넥트웍스",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30814%2Fmttxbsgu1xgrsv6f__1080_790.png&w=520&q=100",
      logoSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.ee957ab4.png&w=42&q=100",
      name: "넷타겟",
      industry: "전문, 과학기술",
    },
  ];

  const themeBanner_data = [
    {
      imgSrc: "imgs/themeBannerImgs/themeBannerImg1.webp",
      title: "주말 3일! 주 4일 근무 기업",
      info: "일과 삶의 균형을 찾을 수 있는 기업을 소개합니다.",
      companyLogo: [],
    },
    {
      imgSrc: "imgs/themeBannerImgs/themeBannerImg2.webp",
      title: "이직을 Wanted! 잠실/성수 소재 기업",
      info: "잠실/성수 소재의 채용 중인 기업을 소개합니다.",
      companyLogo: [],
    },
    {
      imgSrc: "imgs/themeBannerImgs/themeBannerImg3.webp",
      title: "연봉 Flex! 연봉 상위 10% 기업",
      info: "업계별 상위 연봉을 제시하는 기업을 소개합니다.",
      companyLogo: [],
    },
    {
      imgSrc: "imgs/themeBannerImgs/themeBannerImg4.webp",
      title: "이직을 Wanted! 주 2일 이상 재택근무 기업",
      info: "주 2일 이상 재택근무 중인 기업을 소개합니다.",
      companyLogo: [],
    },
    {
      imgSrc: "imgs/themeBannerImgs/themeBannerImg5.webp",
      title: "이직은 Wanted! 마포/여의도/광화문 소재 기업",
      info: "마포/여의도/광화문 소재의 채용 중인 기업을 소개합니다.",
      companyLogo: [],
    },
    {
      imgSrc: "imgs/themeBannerImgs/themeBannerImg6.webp",
      title: "주요 대기업",
      info: "사업성, 성장성, 인지도까지! 세 가지를 모두 갖춘 대기업을 소개합니다.",
      companyLogo: [],
    },
  ];

  const position_data = [
    {
      imgSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F17898%2Fhbursbfcc9cuktml__400_400.jpg&w=400&q=75",
      position: "바이럴 마케터",
      company: "킨다그로스",
      location: "서울",
      reward: "1,000,000",
    },
    {
      imgSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1698%2Fxqqqd5e8our89rry__400_400.jpg&w=400&q=75",
      position: "[랩노쉬] 브랜드마케터",
      company: "이그니스",
      location: "서울",
      reward: "1,000,000",
    },
    {
      imgSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26106%2Frpfzdrn1wqpd8zkb__400_400.png&w=400&q=75",
      position: "CEO Staff (전략기획)",
      company: "전략기획",
      location: "서울",
      reward: "1,000,000",
    },
    {
      imgSrc:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F12359%2Fm85rhmdhelghchsm__400_400.png&w=400&q=75",
      position: "UX Researcher",
      company: "에이치디정션",
      location: "서울",
      reward: "1,000,000",
    },
  ];

  return (
    <>
      <TopBanner>
        <Slider {...topbanner_settings}>
          {jobFeed_topBanner_data.map((data) => {
            return (
              <div className="topBanner-slide">
                <img src={data.img} alt="" />
              </div>
            );
          })}
        </Slider>
      </TopBanner>
      <LineBanner>
        <Link to="/" className="position-link">
          <IoSearchOutline className="search-icon" />
          채용 중인 포지션 보러가기
        </Link>
      </LineBanner>
      <MatchingBanner>
        <div className="matching-header">
          <div className="logo-container">
            <img src="imgs/wanted-logo1.png" alt="wantedLogo" width={"80px"} />
            <img
              src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
              alt="wantedLogo2"
              width={"170px"}
            />
          </div>
          <div className="matching-title">
            <img
              src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
              alt="wantedLogo2"
              width={"120px"}
            />
            가 제안하는 합격률 높은 포지션
          </div>
        </div>
        <div className="matching-body">
          <h3>회원가입하면 포지션을 추천해드려요.</h3>
          <button type="button">지금 시작하기</button>
        </div>
      </MatchingBanner>
      <CareerBanner>
        <div className="careerBanner-container">
          <div class="careerBanner__content">
            <p>입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
            <button type="button">지금 확인하기</button>
          </div>
          <img src="imgs/banner-img.png" alt="careerBannerImg" />
        </div>
      </CareerBanner>
      <ShortCutBanner>
        <ul className="shortcut-container">
          <li>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              내 프로필
            </button>
          </li>
          <li>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
              </svg>
              매치업
            </button>
          </li>
        </ul>
      </ShortCutBanner>
      <CompanyIntroduceSection>
        <div className="first-container">
          <div className="first-container__header">
            <h2 className="first-container__header__title">
              <Link to="/">#급성장 중</Link>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75"
                alt="rapidGrowthImg"
              />
              <span>회사를 소개합니다</span>
            </h2>
            <p>포지션으로 더보기 {">"}</p>
          </div>
          <Slider {...company_introduce_settings}>
            {company_data
              .filter((data) => {
                return data.type === "rapidGrowth";
              })
              .map((data, i) => {
                return (
                  <Link to="/" className="slide-card">
                    <img
                      className="slide-card__header"
                      src={data.companyImg}
                      alt=""
                    />
                    <div className="slide-card__body">
                      <div className="slide-card__body__content">
                        <img
                          className="slide-card__body__content__logo"
                          src={data.logoSrc}
                          alt=""
                        />
                        <div className="slide-card__body__content__info">
                          <h3>{data.name}</h3>
                          <p>{data.industry}</p>
                        </div>
                      </div>
                      <FollowBtn />
                    </div>
                  </Link>
                );
              })}
          </Slider>
        </div>

        <div className="first-container">
          <div className="first-container__header">
            <h2 className="first-container__header__title">
              <Link to="/">#일한 만큼 보상 받는</Link>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75"
                alt="rapidGrowthImg"
              />
              <span>회사를 소개합니다</span>
            </h2>
            <p>포지션으로 더보기 {">"}</p>
          </div>
          <Slider {...company_introduce_settings}>
            {company_data
              .filter((data) => {
                return data.type === "rewardForWork";
              })
              .map((data, i) => {
                return (
                  <Link to="/" className="slide-card">
                    <img
                      className="slide-card__header"
                      src={data.companyImg}
                      alt=""
                    />
                    <div className="slide-card__body">
                      <div className="slide-card__body__content">
                        <img
                          className="slide-card__body__content__logo"
                          src={data.logoSrc}
                          alt=""
                        />
                        <div className="slide-card__body__content__info">
                          <h3>{data.name}</h3>
                          <p>{data.industry}</p>
                        </div>
                      </div>
                      <FollowBtn />
                    </div>
                  </Link>
                );
              })}
          </Slider>
        </div>
      </CompanyIntroduceSection>

      <DividerLine />

      <ThemeBanner>
        <div className="themeBanner__header">
          <h2>테마로 모아보는 요즘 채용</h2>
        </div>
        <Slider {...company_introduce_settings}>
          {themeBanner_data.map((data) => {
            return (
              <div className="slide-container">
                <Link to="/" className="slide-card">
                  <img
                    className="slide-card__header"
                    src={data.imgSrc}
                    alt=""
                  />
                  <div className="slide-card__body">
                    <h2>{data.title}</h2>
                    <p>{data.info}</p>
                  </div>
                  <div className="company-logo"></div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </ThemeBanner>

      <DividerLine />

      <FeaturedJobList>
        <h2>요즘 뜨는 포지션</h2>
        <ul class="job-list">
          {position_data.map((data, i) => {
            return (
              <li>
                <JobCard
                  imgSrc={data.imgSrc}
                  position={data.position}
                  company={data.company}
                  location={data.location}
                  reward={data.reward}
                />
              </li>
            );
          })}
        </ul>
      </FeaturedJobList>
    </>
  );
};

const TopBanner = styled.div`
  margin-top: 50px;
  padding-top: 25px;
  width: 100%;

  .slick-slider {
    width: 1060px;
    margin: 0 auto;
  }

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
    z-index: 999;
  }

  .prev-arrow,
  .next-arrow {
    position: absolute;
    z-index: 100;
    top: 40%;
  }

  .prev-arrow {
    left: -5%;
  }

  .next-arrow {
    right: -5%;
  }
`;
const LineBanner = styled.div`
  margin: 60px auto;

  .position-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      90deg,
      #01a9fe -12%,
      #2f5fef 37%,
      #046afe 72%,
      #00d2dd 110%
    );
    border-radius: 38.5px;
    max-width: 1060px;
    margin: auto auto;
    padding: 21px 30px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }

  .search-icon {
    width: 28px;
    height: 28px;
    margin-right: 15px;
  }
`;
const MatchingBanner = styled.article`
  background-color: rgb(245, 248, 251);
  padding-bottom: 60px;
  text-align: center;

  .matching-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0 20px;
    position: relative;
    right: 20px;
  }

  .logo-container img {
    width: ${(props) => props.width}
    height: 80px;
  }

  .matching-title {
    margin-bottom: 6px;
    font-size: 22px;
    font-weight: 700;
    color: #111;
    margin-bottom: 6px;
  }

  .matching-body {
    color: #555;
    font-size: 16px;
    line-height: 19.2px;
  }

  .matching-body button {
    padding: 10px 20px;
    border-radius: 25px;
    line-height: 22px;
    background-color: #36f;
    font-size: 16px;
    font-weight: 700;
    color: #fefefe;
    margin: 20px auto 0 auto;
  }
`;
const CareerBanner = styled.article`
  height: 150px;
  background: linear-gradient(90deg, #ddebff -0.28%, #b7d8ff);
  margin: 20px 0 60px;

  .careerBanner-container {
    width: 90%;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1060px;
    color: #5071dc;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    overflow-y: hidden;
  }

  .careerBanner__content button {
    border-radius: 25px;
    background-color: #5071dc;
    color: #fff;
    margin-top: 10px;
    height: 36px;
    font-size: 14px;
    width: 119px;
    font-weight: 700;
    line-height: 16px;
  }

  .careerBanner-container img {
    width: 236px;
    height: 169px;
    }
  }
`;
const ShortCutBanner = styled.nav`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 60px 0 85px;

  .shortcut-container {
    display: flex;
    justify-content: space-around;
  }

  .shortcut-container li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    flex: 1 0;
  }

  .shortcut-container li:first-child {
    background-color: #f2f5ff;
    border-top-left-radius: 38.5px;
    border-bottom-left-radius: 38.5px;
  }

  .shortcut-container li:last-child {
    background-color: #f2fbf5;
    border-top-right-radius: 38.5px;
    border-bottom-right-radius: 38.5px;
  }

  .shortcut-container button {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  }

  .shortcut-container svg {
    margin-right: 12px;
    margin-bottom: 4px;
  }
`;
const CompanyIntroduceSection = styled.section`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  text-align: center;

  .first-container {
    margin-bottom: 90px;
  }

  .first-container__header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .first-container__header__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
  }

  .first-container__header__title img {
    position: relative;
    width: 24px;
    height: 24px;
    top: 3px;
    margin: 0 4px;
  }

  .first-container__header p {
    color: #767676;
    font-weight: 500;
  }

  .first-container span {
    font-weight: 400;
  }

  .slide-card {
    padding: 10px;
  }

  .slide-card__header {
    width: 100%;
    height: 280px;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .slide-card__body {
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
  }

  .slide-card__body__content {
    display: flex;
    text-align: left;
  }

  .slide-card__body__content h3 {
    font-size: 18px;
    font-weight: 700;
  }

  .slide-card__body__content p {
    color: #999;
  }

  .slide-card__body__content__logo {
    width: 42px;
    height: 42px;
    margin-right: 12px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 10%);
    background-position: center;
  }

  .slide-card button {
    font-size: 15px;
    font-weight: 700;
    border: 1px solid #e1e2e3;
    border-radius: 25px;
    color: #36f;
    background-color: #fff;
    padding: 5px 25.5px;
  }

  .slick-slider {
    height: 380px;
    margin: 0 auto;
    width: 100%;
  }
`;
const ThemeBanner = styled.article`
  width: 90%;
  margin: 0 auto;
  max-width: 1060px;
  padding: 72px 0 72px 0;

  .themeBanner__header {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .slick-slide {
    padding: 10px;
  }

  .slide-card__header {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .slide-card__body {
    margin-top: 16px;
  }

  .slide-card__body h2 {
    font-size: 18px;
    font-weight: 700;
  }

  .slide-card__body p {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #939393;
  }
`;
const FeaturedJobList = styled.article`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 70px 0 50px;

  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    color: #111;
    margin-bottom: 30px;
  }

  .job-list {
    display: flex;
    margin: -10px;
  }

  .job-list li {
    width: 25%;
    padding: 10px;
  }
`;
export default JobsFeed;
