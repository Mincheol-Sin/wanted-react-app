import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-nav">
          <div className="header-nav__left flex">
            <img src="imgs/menu-btn.webp" className="menu-btn" />
            <a href="/" className="header-logo">
              <img src="imgs/wanted-logo.png" />
            </a>
          </div>
          <ul className="header-nav__mainNav">
            <li>
              <a href="">채용</a>
            </li>
            <li>
              <a href="">이벤트</a>
            </li>
            <li>
              <a href="">직군별 연봉</a>
            </li>
            <li>
              <a href="">이력서</a>
            </li>
            <li>
              <a href="">커뮤니티</a>
            </li>
            <li>
              <a href="">프리랜서</a>
            </li>
            <li>
              <a href="">AI 합격예측</a>
            </li>
          </ul>
          <ul className="header-nav__subNav">
            <li>
              <button type="button" className="search-btn">
                <svg
                  className="w-6 h-6"
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
              </button>
            </li>
            <li>
              <button type="button" className="signUp-btn">
                회원가입/로그인
              </button>
            </li>
            <li>
              <a href="/" className="dashboard">
                기업 서비스
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
