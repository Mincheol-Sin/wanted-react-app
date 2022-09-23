import React from "react";
import styled from "styled-components";

const CareerBanner = () => {
  return (
    <Container>
      <ContentContainer>
        <div class="careerBanner__content">
          <p>입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
          <Btn>지금 확인하기</Btn>
        </div>
        <BannerImg src="https://static.wanted.co.kr/career_connect/banner.png" />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.article`
  height: 150px;
  background: linear-gradient(90deg, #ddebff -0.28%, #b7d8ff);
  margin: 20px 0 60px;
`;

const ContentContainer = styled.div`
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
`;

const Btn = styled.button`
  border-radius: 25px;
  background-color: #5071dc;
  color: #fff;
  margin-top: 10px;
  height: 36px;
  font-size: 14px;
  width: 119px;
  font-weight: 700;
  line-height: 16px;
`;

const BannerImg = styled.img`
  width: 236px;
  height: 169px;
`;

export default CareerBanner;
