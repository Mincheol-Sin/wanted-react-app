import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompanyIntroduce = () => {
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
      logo: "(https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.408c9307.jpg&w=42&q=100",
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
      <Container>
        <ContainerTitle>
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
        <ContainerTitle>
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
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 90px;
  max-width: 1060px;
  text-align: center;
`;

const ContainerTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 9px;
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

export default CompanyIntroduce;
