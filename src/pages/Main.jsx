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

export default Main;
