import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-nav__left flex">
          <button>
            <img src="imgs/menu-btn.webp" className="menu-btn-img" />
          </button>
          <Link to="/" className="header-logo">
            <img src="imgs/wanted-logo.png" />
          </Link>
        </div>
        <ul className="header-nav__mainNav">
          <li>
            <Link to="/">채용</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <Link to="/">직군별 연봉</Link>
          </li>
          <li>
            <Link to="/">이력서</Link>
          </li>
          <li>
            <Link to="/">커뮤니티</Link>
          </li>
          <li>
            <Link to="/">프리랜서</Link>
          </li>
          <li>
            <Link to="/">AI 합격예측</Link>
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
            <Link to="/" className="dashboard">
              기업 서비스
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
