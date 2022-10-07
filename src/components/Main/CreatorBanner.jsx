import styled from "styled-components";

const CreatorBanner = () => {
  return (
    <Banner>
      <div className="container">
        <div className="title">
          즐겨보는&nbsp;<span>크리에이터의</span>&nbsp;글도 추천하고 싶다면?
          <img src="imgs/creatorBanner.webp" alt="크리에이터 추천하기" />
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfElPZfmbfV96-Jh21kfw62ecVzcBwsxOh-Wsrj-oUQcEhJ1g/viewform">
          크리에이터 추천하기
        </a>
      </div>
    </Banner>
  );
};

const Banner = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  background-color: #36f;
  margin-bottom: 60px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto;

    .title {
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #fff;
      font-weight: 500;
      letter-spacing: -0.2px;

      span {
        color: #a9ecf0;
      }
    }

    a {
      color: #36f;
      background-color: #fff;
      padding: 8px 50px;
      border-radius: 25px;
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

export default CreatorBanner;
