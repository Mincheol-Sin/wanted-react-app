import React from "react";
import styled from "styled-components";

const Matching = () => {
  return (
    <Container>
      <MatchingHeader>
        <LogoCantainer>
          <WantedLogo
            src="imgs/wanted-logo1.png"
            class="wanted-logo1"
            alt="wantedLogo"
          />
          <WantedAiLogo
            src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
            class="wanted-logo2"
            alt="wantedLogo2"
            width={"170px"}
          />
        </LogoCantainer>
        <MatchingTitle>
          <WantedAiLogo
            src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
            class="wanted-logo2"
            alt="wantedLogo2"
            width={"120px"}
          />
          가 제안하는 합격률 높은 포지션
        </MatchingTitle>
      </MatchingHeader>
      <MatchingBody>
        <h3>회원가입하면 포지션을 추천해드려요.</h3>
      </MatchingBody>
      <MatchingBtn>지금 시작하기</MatchingBtn>
    </Container>
  );
};

const Container = styled.article`
  background-color: rgb(245, 248, 251);
  padding-bottom: 60px;
  text-align: center;
`;

const MatchingHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoCantainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 20px;
  position: relative;
  right: 20px;
`;

const WantedLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const WantedAiLogo = styled.img`
  width: ${(props) => props.width};
`;

const MatchingTitle = styled.div`
  margin-bottom: 6px;
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
`;

const MatchingBody = styled.div`
  color: #555;
  font-size: 16px;
  line-height: 19.2px;
`;

const MatchingBtn = styled.button`
  padding: 10px 20px;
  border-radius: 25px;
  line-height: 22px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 700;
  color: #fefefe;
  margin: 20px auto 0 auto;
`;

export default Matching;
