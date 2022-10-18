import React from "react";
import SlideSection from "../common/SlideSection";

const CareerEvent = () => {
  let data = [
    {
      href: "/",
      thumbnail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2406%2F6aae1a5c.jpg&w=1200&q=100",
      title: "[무료] 인간관계, 회사생활, 커리어고민 1분만에 해결하기",
    },
    {
      href: "/",
      thumbnail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2404%2F54ecb586.jpg&w=1200&q=100",
      title: "인터뷰ㅣ여성 IT리더들의 성장 경험을 공유합니다!",
    },
    {
      href: "/",
      thumbnail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2422%2Ffeb067d4.jpg&w=1200&q=100",
      title: "기업의 성공을 리드하는 번개장터 마케터의 데이터",
    },
    {
      href: "/",
      thumbnail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2414%2F93dc7b57.jpg&w=1200&q=100",
      title: "스타트업 Lead를 위한 그룹코칭",
    },
    {
      href: "/",
      thumbnail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2421%2F7065bb13.jpg&w=1200&q=100",
      title: "10월 원티드살롱(평가보상편)",
    },
    {
      href: "/",
      thumbnail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2444%2Fee83ad13.jpg&w=1200&q=100",
      title: "프리온보딩 백엔드 코스",
    },
  ];

  return (
    <section>
        <SlideSection
          title="커리어 성장을 위한 맞춤 이벤트"
          subTitle="이벤트 전체보기"
          data={data}
        />
    </section>
  );
};

export default CareerEvent;
