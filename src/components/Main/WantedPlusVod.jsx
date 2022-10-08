import styled from "styled-components";
import Slider from "react-slick";
import ArticleCard from "../common/card/ArticleCard";
import { PrevArrowBtn, NextArrowBtn } from "../common/button/ArrowBtns";

let wantedPlusVodList = [
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210521%2F7%2F68765761.jpg&w=800&q=75",
    author: "리더의대화연구소 서수한",
    title: "함께 일하고 싶은 리더가 되는 질문법",
    subTitle: "일잘러의 무기는 테크닉일까, 마인드셋일까 : Live Talk #26",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210413%2F2%2F39565343.jpg&w=800&q=75",
    author: "전) 원티드랩 최보명",
    title: "포트폴리오를 부탁해",
    subTitle: "[무료] 포트폴리오를 부탁해 by 원티드",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210224%2F8%2F90123633.jpg&w=800&q=75",
    author: "원티드랩 류다현",
    title:
      "Wanted Talk Engineering #1: 테스트 코드와 배포 시스템 - 서버 배포 방식",
    subTitle: "(무료) 테스트 코드와 배포 시스템 : Wanted Talk Engineering #1",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75",
    author: "인터비즈 팀장클럽 김진영",
    title: "팀장으로 산다는 건",
    subTitle: "팀장으로 산다는 건 : Live Talk #30",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F32385576.jpg&w=800&q=75",
    author: "애프터모멘트 박창선",
    title:
      "터지는 콘텐츠는 이렇게 만듭니다 Part 3 : 위트와 무리수레벨 조절하기 - 박창선",
    subTitle: "터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F46759799.jpg&w=800&q=75",
    author: "애프터모멘트 박창선",
    title: "터지는 콘텐츠는 이렇게 만듭니다 Part 2 : 독자의 마음 - 박창선",
    subTitle: "터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211111%2F10%2F24788089.jpg&w=800&q=75",
    author: "피플펀드 권순관, 드림어스 제정민",
    title: "신입 개발자의 취업 성공기",
    subTitle: "신입 개발자의 취업 성공기 : Live Talk #50",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210618%2F2%2F34753914.jpg&w=800&q=75",
    author: "노무법인 예담HR컨설팅 장내석",
    title: "회사를 구하는 인사",
    subTitle: "회사를 구하는 인사 : Live Talk #27",
  },
];

const WantedPlusVodSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrowBtn />,
  prevArrow: <PrevArrowBtn />,
};

const WantedPlusVod = () => {
  return (
    <Section>
      <div className="BannerHeader">
        <h2 className="title">3분만에 읽는 Wanted+ VOD</h2>
        <a href="/">VOD 전체보기 {">"}</a>
      </div>
      <ul className="WantedPlusList">
        <Slider {...WantedPlusVodSettings}>
          {wantedPlusVodList.map((item) => {
            return (
              <ArticleCard
                href={item.href}
                thumbnail={item.thumbnail}
                author={item.author}
                title={item.title}
                subTitle={item.subTitle}
              />
            );
          })}
        </Slider>
      </ul>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 0;
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;

  .BannerHeader {
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

export default WantedPlusVod;
