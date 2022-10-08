import TopBanner from "../components/Main/TopBanner";
import CareerContent from "../components/Main/CareerContent";
import CreatorBanner from "../components/Main/CreatorBanner";
import DividerLine from "../components/common/DividerLine";
import WantedPlusArticle from "../components/Main/WantedPlusArticle";
import WantedPlusVod from "../components/Main/WantedPlusVod";

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
    </>
  );
};

export default Main;
