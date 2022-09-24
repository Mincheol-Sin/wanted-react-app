import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/jobsfeed.css";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import Matching from "../components/Matching";
import CareerBanner from "../components/CareerBanner";

const JobsFeed = () => {
  const topBannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const companyData = [
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F49%2F1eeyyoie3qgnqsj0__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.2bf57da8.png&w=42&q=100",
      name: "데이원컴퍼니",
      industry: "교육",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F136%2Fjhtqznnhtixesx0t__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.d2c59d45.png&w=42&q=100",
      name: "하이퍼커넥트",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F282%2Fgwsw3ljzwrbna5w1__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.950aec10.jpg&w=42&q=100",
      name: "백패커(idus)",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5394%2Fjxosc5of5rhbj82o__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.66b7615f.png&w=42&q=100",
      name: "오지큐",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F332%2Fijuur6zwf60zbflv__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.5129425e.jpg&w=42&q=100",
      name: "매드업",
      industry: "IT, 콘텐츠",
    },
    {
      type: "rapidGrowth",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2221%2Fqb3mjyiaeytoyc7x__1080_790.png&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.c2f82a4e.jpg&w=42&q=100",
      name: "넷마블",
      industry: "IT, 콘텐츠",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F28672%2Fjerscppsk9grp4x2__1080_790.png&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.bc46812f.jpg&w=42&q=100",
      name: "모모랩스",
      industry: "제조",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F28835%2Fgllbjfuz8hk8r1u3__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.408c9307.jpg&w=42&q=100",
      name: "헥사인",
      industry: "기타 서비스업",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26113%2Frj2niggsts8hgyzz__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.6cdc51a7.jpg&w=42&q=100",
      name: "토리든",
      industry: "판매유통",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15170%2Fyjtgzxxgqbke9llp__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.51d70e95.jpg&w=42&q=100",
      name: "아이메디신",
      industry: "컨텐츠",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F519%2Fs71tual9fbehaatp__1080_790.jpg&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.ab706792.jpg&w=42&q=100",
      name: "이스턴넥트웍스",
      industry: "IT, 컨텐츠",
    },
    {
      type: "rewardForWork",
      companyImg:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30814%2Fmttxbsgu1xgrsv6f__1080_790.png&w=520&q=100",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.ee957ab4.png&w=42&q=100",
      name: "넷타겟",
      industry: "전문, 과학기술",
    },
  ];

  return (
    <>
      <TopBanner>
        <Slider {...topBannerSettings}>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1802%2F4480ef99.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1422%2Fb4a42a0f.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1794%2F5db4820b.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1804%2F46348b23.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1795%2F05d726f2.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1793%2F07342bec.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1589%2F4d187185.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1785%2Ff28ae1db.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1806%2F55d3cb39.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1805%2Fc888f442.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1750%2F62c0f917.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1784%2F2709f64c.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1792%2F50191ad1.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1795%2F05d726f2.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1804%2F46348b23.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1802%2F4480ef99.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1785%2Ff28ae1db.jpg&w=1060&q=100" />
          </div>
          <div className="topBanner-slide">
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1422%2Fb4a42a0f.jpg&w=1060&q=100" />
          </div>
        </Slider>
      </TopBanner>
      <LineBanner>
        <Link to="/" className="position-link">
          <IoSearchOutline className="search-icon" />
          채용 중인 포지션 보러가기
        </Link>
      </LineBanner>
      <Matching />
      <CareerBanner />
      <ShortCut>
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
      </ShortCut>
      <CompanyIntroduceSection></CompanyIntroduceSection>
      <DividerLine />
    </>
  );
};

const TopBanner = styled.div`
  margin-top: 50px;
  padding-top: 25px;
  width: 100%;

  .slick-list {
    overflow: visible;
    max-width: 1060px;
    margin: 0 auto;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-slide img {
    border-radius: 5px;
    max-width: 100%;
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

const ShortCut = styled.nav`
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

const CompanyIntroduceSection = styled.div`
  .slick-list {
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 90px;
  max-width: 1060px;
  text-align: center;
  margin-top: ${(props) => props.mt};
`;

const ContainerTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: ${(props) => props.mb};
`;

const ContainerTitleImg = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  top: 3px;
  margin: 0 4px;
`;

const ContainerTitleSpan = styled.span`
  font-weight: 400;
`;

const PositionMore = styled.p`
  color: #767676;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
`;

const CardContainer = styled.div`
  padding: 10px;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imgSrc});
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

const CardContent = styled.div`
  display: flex;
  text-align: left;
`;

const CompanyInfo = styled.div`
  height: 42px;
`;

const CompanyLogo = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background-position: center;
  background-image: url(${(props) => props.imgSrc});
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

const CompanyIndustry = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;

const FollwBtn = styled.button`
  font-size: 15px;
  font-weight: 700;
  border: 1px solid #e1e2e3;
  border-radius: 25px;
  color: #36f;
  background-color: #fff;
  padding: 5px 25.5px;
`;

const DividerLine = styled.div`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  height: 1px;
  background-color: #ececec;
`;

export default JobsFeed;
