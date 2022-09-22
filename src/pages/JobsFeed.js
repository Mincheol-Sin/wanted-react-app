import TopBanner from "../components/TopBannerSlider";
import CompanyIntroduce from "../components/CompanyIntroduce";
import { Link } from "react-router-dom";
import "../css/jobsfeed.css";

const JobsFeed = () => {
  return (
    <>
      <TopBanner />
      <div class="lineBanner">
        <Link to="/">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          채용 중인 포지션 보러가기
        </Link>
      </div>
      <article class="matching">
        <div class="matching-header">
          <img src="imgs/wanted-logo1.png" class="wanted-logo1"></img>
          <img
            src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
            class="wanted-logo2"
          />
        </div>
        <div class="matching-content">
          <h2>
            <img
              src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
              alt="logo-wantedai"
            />
            가 제안하는 합격률 높은 포지션
          </h2>
          <h3>회원가입하면 포지션을 추천해드려요.</h3>
        </div>
        <button type="button">지금 시작하기</button>
      </article>
      <article class="careerBanner">
        <div class="careerBanner__container">
          <div class="careerBanner__content">
            <p>입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</p>
            <button type="button">지금 확인하기</button>
          </div>
          <img src="https://static.wanted.co.kr/career_connect/banner.png" />
        </div>
      </article>
      <nav class="shortcut-container">
        <ul>
          <li>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              내 프로필
            </button>
          </li>
          <li>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
              </svg>
              매치업
            </button>
          </li>
        </ul>
      </nav>
      <CompanyIntroduce />
    </>
  );
};

export default JobsFeed;
