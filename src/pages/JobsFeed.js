import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../css/jobsfeed.css";
import styled from "styled-components";
import TopBanner from "../components/TopBannerSlider";
import LineBanner from "../components/LineBanner";
import Matching from "../components/Matching";

const JobsFeed = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      <TopBanner />
      <LineBanner />
      <Matching />
      <article class="careerBanner">
        <div class="careerBanner__container">
          <div class="careerBanner__content">
            <p>입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
            <button type="button">지금 확인하기</button>
          </div>
          <img src="https://static.wanted.co.kr/career_connect/banner.png" />
        </div>
      </article>
      <nav class="shortcut-container">
        <ul>
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
      </nav>
      <div className="introduce-slider">
        <Container>
          <ContainerTitle mb="9px">
            <Link to="/">#급성장 중</Link>
            <ContainerTitleImg src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75" />
            <ContainerTitleSpan>회사를 소개합니다</ContainerTitleSpan>
          </ContainerTitle>
          <PositionMore>
            <Link to="/">포지션으로 더보기 {">"}</Link>
          </PositionMore>
          <Slider {...settings}>
            {companyData.map((data) => {
              if (data.type == "rapidGrowth") {
                return (
                  <CardContainer>
                    <Link to="/">
                      <CardHeader imgSrc={data.companyImg} />
                      <CardBody>
                        <CardContent>
                          <CompanyLogo imgSrc={data.logo} />
                          <CompanyInfo>
                            <CompanyName>{data.name}</CompanyName>
                            <CompanyIndustry>{data.industry}</CompanyIndustry>
                          </CompanyInfo>
                        </CardContent>
                        <FollwBtn type="button">팔로우</FollwBtn>
                      </CardBody>
                    </Link>
                  </CardContainer>
                );
              }
            })}
          </Slider>
        </Container>

        <Container>
          <ContainerTitle mb="9px">
            <Link to="/">#일한만큼 보상받는</Link>
            <ContainerTitleImg src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75" />
            <ContainerTitleSpan>회사를 소개합니다</ContainerTitleSpan>
          </ContainerTitle>
          <PositionMore>
            <Link to="/">포지션으로 더보기 {">"}</Link>
          </PositionMore>
          <Slider {...settings}>
            {companyData.map((data) => {
              if (data.type == "rewardForWork") {
                return (
                  <CardContainer>
                    <Link to="/">
                      <CardHeader imgSrc={data.companyImg} />
                      <CardBody>
                        <CardContent>
                          <CompanyLogo imgSrc={data.logo} />
                          <CompanyInfo>
                            <CompanyName>{data.name}</CompanyName>
                            <CompanyIndustry>{data.industry}</CompanyIndustry>
                          </CompanyInfo>
                        </CardContent>
                        <FollwBtn type="button">팔로우</FollwBtn>
                      </CardBody>
                    </Link>
                  </CardContainer>
                );
              }
            })}
          </Slider>
        </Container>
      </div>
      <DividerLine />
    </>
  );
};

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
