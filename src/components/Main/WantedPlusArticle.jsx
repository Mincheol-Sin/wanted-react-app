import styled from "styled-components";
import ArticleCard from "../common/card/ArticleCard";
import Slider from "react-slick";
import { NextArrowBtn, PrevArrowBtn } from "../common/button/ArrowBtns";

let wantedPlusArticleList = [
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75",
    title: "스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?",
    category: "#HR #조직문화 #경영/전략",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75",
    title: "리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀",
    category: "#개발",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2441%2F0b7c94dc.jpg&w=800&q=75",
    title: "소셜을 석권한 ‘티빙’ 오리지널 콘텐츠 마케팅",
    category: "#마케팅·광고 #브랜딩 #콘텐츠 제작",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2432%2Fbf1903f2.jpg&w=800&q=75",
    title: "선선한 가을 날씨에 어울릴 아티클 추천 리스트",
    category: "#마케팅·광고 #커리어고민 #시리즈 ",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2440%2F22cd7b04.jpg&w=800&q=75",
    title: "냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요",
    category: "#프리랜서 ",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2430%2Fd892e109.jpg&w=800&q=75",
    title: "IP 확장 그리고 글로벌 진출로 세계 선구자가 되다",
    category: "#미디어 #콘텐츠 제작 #회사생활 ",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2439%2F2da70321.jpg&w=800&q=75",
    title: "회사에서도 SNS처럼 만나면 되잖아!",
    category: "#경영/전략 #HR #조직문화",
  },
  {
    href: "/",
    thumbnail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2427%2F9d71c6cc.jpg&w=800&q=75",
    title: "애써 모셔온 시니어, 우리 조직엔 안 맞는 사람?",
    category: "#HR #조직문화 #리더십 ",
  },
];

const WantedPlusList_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrowBtn />,
  prevArrow: <PrevArrowBtn />,
};

const WantedPlusArticle = () => {
  return (
    <Section>
      <div className="BannerHeader">
        <h2 className="title">3분만에 읽는 Wanted+ 아티클</h2>
        <a href="/">아티클 전체보기 {">"}</a>
      </div>
      <ul className="WantedPlusList">
        <Slider {...WantedPlusList_settings}>
          {wantedPlusArticleList.map((item) => {
            return (
              <ArticleCard
                href={item.href}
                thumbnail={item.thumbnail}
                title={item.title}
                category={item.category}
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

export default WantedPlusArticle;
