import { createGlobalStyle } from "styled-components";
import TopBanner from "../components/Main/TopBanner";
import CareerContent from "../components/Main/CareerContent";
import CreatorBanner from "../components/Main/CreatorBanner";
import DividerLine from "../components/common/DividerLine";
import WantedPlusArticle from "../components/Main/WantedPlusArticle";
import WantedPlusVod from "../components/Main/WantedPlusVod";
import LineBanner from "../components/common/LineBanner";
import CareerEvent from "../components/Main/CareerEvent";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <TopBanner />
      <CareerContent />
      <CreatorBanner />

      <DividerLine />

      <WantedPlusArticle />

      <DividerLine />

      <WantedPlusVod />
      <LineBanner
        title="직군/직무를 입력하면 콘텐츠를 추천해드려요. 👀"
        arrow="true"
      />
      <CareerEvent />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  section {
    padding: 60px 0;
  }

  .section-wrapper {
    width: 87.72%;
    max-width: 1060px;
    margin: 0 auto;
  }
`;

export default Main;
