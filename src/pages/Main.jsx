import styled from "styled-components";
import Slider from "react-slick";
import CareerCard from "../components/CareerCard";
import { useState } from "react";
import DividerLine from "../components/DividerLine";
import { NextArrowBtn, PrevArrowBtn } from "../components/ArrowBtns";

const categorys = [
  "리더십",
  "커리어고민",
  "취업/이직",
  "조직문화",
  "라이프스타일",
  "인간관계",
  "회사생활",
  "IT/기술",
  "마케팅",
  "서비스기획",
  "개발",
];

const main_topBanner_data = [
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg1.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg2.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg3.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg4.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg5.webp",
  },
  {
    img: "imgs/mainTopBannerImgs/mainTopBannerImg6.webp",
  },
];

const careerContentCard_data = [
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&w=500&q=75",
    title: "변화를 즐기는 팀을 만들어볼까요? - 김윤혁",
    desc: "혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한방향으로 움직여야지만 해결할 수 있는 미션이...",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "강남언니 김윤혁",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F9%2F96649545.jpg&w=500&q=75",
    title: "복잡한 시대, 리더가 유지해야 할 것과 유발해야 할 것 - 정영재",
    desc: "지금 조직들이 가장 많이 스터디하고 있는 'Agile'에 대한 이해를 통해 바람직한 리더의 역할을 고민해 보고자 합니다. 불확실성을 제거하는데 가장 중요한 민첩성 agility과 바뀌고 있는 구성원을 동기부여 하는데 적합한 변수들 variables에 대해 국내 실증 연구결과를 바탕으로 소개합니다. 최근 Hot 하다고 하는 '권한위임, 협업, 내적동기부여, 주도성, 적응성, 회복력, 공정성' 등이 왜 Hot한 지 그 이유를 찾게 될 것입니다.",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "LS그룹 정영재",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211125%2F13%2F53893575.jpg&w=500&q=75",
    title: "부하직원이 말하지 않는 31가지 진실",
    desc: "리더십은 함께 일하고 따르는 사람들을 통해 완성됩니다. 이번 Talk에서는 리더의 자기 인식, 구성원 동기유발, 사람을 보는 안목, 일하는 방법과 환경과 관련된 리더가 흔하게 빠지기 쉬운 31가지의 착각을 소개합니다.",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "박태현",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211202%2F8%2F63480345.jpg&w=500&q=75",
    title: "온몸으로 소통하는 리더십이란?",
    desc: "대한민국 수소자동차와 전기차의 과거부터 현재를 함께한 최고의 엔지니어이자, 조직문화라는 개념 자체가 희미했던 시대에 신뢰를 기반으로 하는 조직문화를 만들고 지켜온 조직개발 전문가 안병기님을 모셨습니다. 자신의 어깨를 내어주어 후배들이 더 높은 곳으로 비약할 수 있도록 독려해주는, ‘거인의 어깨’를 가진 리더들이 많아지는 사회를 꿈꾼다고 하시는데요, 리더가 보고 듣고 말하고 생각할 때 참고할 수 있는 이야기부터 리더라면 이런 상황에서 어떤 마음을 가져야 하는지, 후배들에게 어떤 유산을 남겨야 하는지에 대한 고민을 이 영상에서 나누려고 합니다.",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "안병기",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FYdQ%2Fimage%2F5U2qb1So5dhYngtNyEuYPEJoaDo.png&w=500&q=75",
    title: "리더와 구성원의 관계",
    desc: "옛날 이야기이긴 하지만 저는 GOP라 부르는 곳에서 군 복무를 했습니다. 당연히 초소 근무가 주된 임무라고 할 수 있을 겁니다. 초소에는 기본적으로 사수와 부사수가 있습니다. 원칙론으로 사수는 전방 경계를, 부사수는 후방 경계를 했지요. 사수가 아무리 뛰어나도 부사수의 후방 경계가 제대로 되지 않으면 결국 놓치는 곳이 생기게 됩니다. 마찬가지로 부사수가 아",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
    infoIconAlt: "brunch",
    info: "Opellie",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75",
    title: "리더십 큐레이션 _ 이견을 듣는 리더",
    desc: "◆ 다른 의견을 듣는 것은 나의 부족함을 인정하는 것이 아니라, 팀과 조직에게 더 나은 결정을 하는 가장 좋은 방법이기 때문입니다.  ① 일본 고등학교 야구에서 나온 꼰대 심판의 모습이 가관입니다. 1)  ‘나를 거스르기 때문에 이렇게 되는거다. 내 뜻을 거역하니 스트라이크도 볼이 되는 것’라고 말하는 심판, 자주 상위권에 올라가는 야구 잘하는 2팀에게 4",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
    infoIconAlt: "brunch",
    info: "그로플 백종화",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&w=500&q=75",
    title: "변화를 즐기는 팀을 만들어볼까요? - 김윤혁",
    desc: "혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한방향으로 움직여야지만 해결할 수 있는 미션이...",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "강남언니 김윤혁",
  },
  {
    subject: "리더십",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&w=500&q=75",
    title: "변화를 즐기는 팀을 만들어볼까요? - 김윤혁",
    desc: "혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한방향으로 움직여야지만 해결할 수 있는 미션이...",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "강남언니 김윤혁",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F75369770.jpg&w=500&q=75",
    title: "좋은 동료 But 낮은 연봉과 보상",
    desc: "동료는 좋지만 낮은 연봉과 보상 때문에 사표를 품에 넣은 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "한국인성컨설팅&마인드클리닉 노주선",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fc1XInGHUb-c%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLCOaTXElr0es4o4IkPu_DmCmHbrSQ&w=500&q=75",
    title: "같이 일하고 싶은 사람의 포트폴리오 공통점 | 디자이너 특집 2편",
    desc: "",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90",
    infoIconAlt: "youtube",
    info: "eo",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FN56Q10EpAas%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLA0_nrWNVFdTzVBuZxtsNCyQ9k_qg&w=500&q=75",
    title: "퇴사가 답일까 | 회사에서 멘탈 지키는 방법",
    desc: "",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90",
    infoIconAlt: "youtube",
    info: "퇴사한이형",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F3%2F00902011.jpg&w=500&q=75",
    title: "예시 사례를 살펴보는 실제 이력서 작성법 - 백승엽",
    desc: "오늘은 실제 예시를 통해 이력서를 작성하는 방법에 대해 알아봅니다.지난 영상에서 이력서가 무엇인지 살펴봤다면, 이번 영상에서는 이력서를 잘 쓰는 구체적인 방법에 대해 알아봅니다.",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "원티드랩 백승엽",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F6YT6%2Fimage%2FCmDHxrFI_7rHRYvztCN1ZnRJ-iY.jpg&w=500&q=75",
    title: "경력개발, 스스로 해보기",
    desc: "직장인들의 조직 내 수명은 어느 정도일까? 오래전 기사에서 ‘직장인이 체감하는 퇴직 나이는 51.7세’라는 기사를 본 적이 있다. 그럼, 50세 이후부터는 뭘 하고 살아야 할지 걱정된다. '50대의 나’는 회사에 계속 다니고 있을지, 다니고 있다면 어떤 모습일지 상상을 하면서 누구에게나 오는 기회는 아니겠지만 영화 '인턴'의 70세 ‘로버트 드니로’의 모습",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
    infoIconAlt: "brunch",
    info: "이수진",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F64766774.jpg&w=500&q=75",
    title: "이력서가 무엇인지 살펴보기 - 백승엽",
    desc: "이력서는 무엇일까요?기계처럼 반복적으로 작성하고 제출하지만 과연 이렇게 써도 되는 것일까요?취업 준비를 하면서 누군가에게 묻고 도움받고 싶은데, 누구에게 물어야 할지 무엇을 물어봐야 할지도 막막한 것이 현실입니다.그런 분들을 돕기 위해 원티드가 1만 개 기업과 200만 명의 회원들의 채용을 연결하면서 얻은 노하우와 데이터들을 공유하고자 합니다.이에 더해 저 또한 한 명의 구직자로서 취업을 준비하면서, 팀장으로서 누군가를 평가해보면서 쌓았던 얻었던 경험들을 이야기하려고 합니다.자 그럼 시작해볼까요?",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "원티드랩 백승엽",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FsVy%2Fimage%2F0_VawQhoY0NCx-_Hmd5tCWJI4sg.png&w=500&q=75",
    title: "그럼에도 불구하고, 이직을 해야 할 때",
    desc: "구독자 님, 안녕하세요! 아직 봄 날씨에 적응도 채 하지 못했는데 왜인지 모르게 다음 주만 지나면 날씨가 훅 하고 더워질 것만 같은 기세입니다. 짧디 짧은 봄이라 더더욱 아쉽기만 한데요, 구독자 님은 어떻게 이번 봄을 보내고 계신지 모르겠습니다.  오늘 뉴스레터 에세이는 지난주 보내드렸던 글 “홈런을 칠 때까지 기다리는 사람”에 대한 구독자 분들의 피드백을",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
    infoIconAlt: "brunch",
    info: "지영킹",
  },
  {
    subject: "커리어고민",
    thumNail:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220517%2F1%2F91648414.jpg&w=500&q=75",
    title: "돈이 먼저일까요, 행복이 먼저일까요?",
    desc: "보상과 맞바꾼 워라밸, 그 안에서 돈과 행복의 우선순위에 대해 고민하는 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!",
    infoIcon:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
    infoIconAlt: "wanted",
    info: "한국인성컨설팅&마인드클리닉 노주선",
  },
  {
    subject: "취업/이직",
    thumNail: "",
    thumNailAlt: "",
    title: "",
    desc: "",
    infoIcon: "",
    infoIconAlt: "",
    info: "",
  },
  {
    subject: "조직문화",
    thumNail: "",
    thumNailAlt: "",
    title: "",
    desc: "",
    infoIcon: "",
    infoIconAlt: "",
    info: "",
  },
  {
    subject: "라이프스타일",
    thumNail: "",
    thumNailAlt: "",
    title: "",
    desc: "",
    infoIcon: "",
    infoIconAlt: "",
    info: "",
  },
  {
    subject: "인간관계",
    thumNail: "",
    thumNailAlt: "",
    title: "",
    desc: "",
    infoIcon: "",
    infoIconAlt: "",
    info: "",
  },
  {
    subject: "회사생활",
    thumNail: "",
    thumNailAlt: "",
    title: "",
    desc: "",
    infoIcon: "",
    infoIconAlt: "",
    info: "",
  },
];

const Main = () => {
  const topbanner_settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn />,
    prevArrow: <PrevArrowBtn />,
  };

  const [career, setCareer] = useState("리더십");

  let nowCategory = 1;

  function onClickCategoryBtn(event) {
    if (nowCategory < 8 && event.target.className === "next-arrow") {
      document.querySelector(
        ".category-container"
      ).style.transform = `translateX(-${nowCategory}00px)`;
      nowCategory++;
    } else if (nowCategory > 1 && event.target.className === "prev-arrow") {
      nowCategory--;
      document.querySelector(
        ".category-container"
      ).style.transform = `translateX(-${nowCategory - 1}00px)`;
    }
  }

  return (
    <>
      <TopBanner>
        <Slider {...topbanner_settings}>
          {main_topBanner_data.map((data) => {
            return (
              <div className="topBanner-slide">
                <img src={data.img} alt="" />
              </div>
            );
          })}
        </Slider>
      </TopBanner>
      <CareerContent>
        <h2>나에게 필요한 커리어 인사이트</h2>
        <div className="category">
          <div className="category-container">
            {categorys.map((data) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    setCareer(data);
                  }}
                >
                  {data}
                </button>
              );
            })}
          </div>
          <PrevArrowBtn onClick={onClickCategoryBtn} />
          <NextArrowBtn onClick={onClickCategoryBtn} />
        </div>
        <ul className="careerContent-list">
          {careerContentCard_data
            .filter((data) => {
              return data.subject === career;
            })
            .map((data) => {
              return (
                <li>
                  <CareerCard data={data} />
                </li>
              );
            })}
        </ul>
      </CareerContent>
      <CreatorBanner>
        <div className="creatorBanner-container">
          <div className="title">
            즐겨보는&nbsp;<span>크리에이터의</span>&nbsp;글도 추천하고 싶다면?
            <img src="imgs/creatorBanner.webp" alt="크리에이터 추천하기" />
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfElPZfmbfV96-Jh21kfw62ecVzcBwsxOh-Wsrj-oUQcEhJ1g/viewform">
            크리에이터 추천하기
          </a>
        </div>
      </CreatorBanner>

      <DividerLine />
    </>
  );
};

const TopBanner = styled.div`
  width: 90%;
  width: 1060px;
  padding-top: 25px;
  margin: 50px auto 0 auto;

  .prev-arrow,
  .next-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    width: 40px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    background-color: #fff;
    z-index: 99;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .prev-arrow {
    left: 0;
  }

  .next-arrow {
    right: 0;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-slide img {
    border-radius: 5px;
    max-width: 100%;
  }

  .slick-arrow {
    z-index: 10;
  }
`;
const CareerContent = styled.section`
  width: 87%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 60px 0;
  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
  }

  .category {
    margin: 30px 0;
    position: relative;
  }

  .category-container {
    transition: all 0.3s;
    width: 1800px;
  }

  .category button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category button svg {
    width: 18px;
    height: 18px;
  }

  .category .next-arrow {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }

  .category .prev-arrow {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }

  .category-container button {
    color: #888;
    height: 40px;
    font-size: 15px;
    border-radius: 25px;
    border: 1px solid #e1e2e3;
    float: left;
    margin: 0 5px 30px;
    padding: 10px 20px;

    :focus,
    :hover {
      font-weight: 700;
      background-color: #fff;
      border: 1px solid #36f;
      color: #36f;
    }
  }

  .careerContent-list {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    clear: both;
  }

  .careerContent-list li {
    width: calc(25% - 20px);
    margin: 0 10px 50px;
  }
`;
const CreatorBanner = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  background-color: #36f;
  margin-bottom: 60px;

  .creatorBanner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto;
  }

  .creatorBanner-container .title {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.2px;
  }

  .creatorBanner-container .title span {
    color: #a9ecf0;
  }

  .creatorBanner-container a {
    color: #36f;
    background-color: #fff;
    padding: 8px 50px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: 700;
  }
`;
export default Main;
